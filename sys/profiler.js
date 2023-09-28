const Fs = require('fs');
const ejs = require('ejs');
const Express = require('express');
const App = Express();
const { getLastQuery } = require('../application/config/database.js');

class Profiler {
    constructor (options) {
        this.options = options;
    }

    profile(view, data, req, res) {
        const profilerTemplate = Fs.readFileSync('./application/views/profiler.ejs', 'utf-8');
    
        const startTime = process.hrtime();
    
        const profilerValues = {
            uriString: `<p>${req.path}</p>`,
            get: '',
            post: '',
            session: '',
            sqlQuery: ''
        };
    
        /* Check GET data */
        if (Object.entries(req.query).length > 0) {
            for (let key in req.query) {
                profilerValues.get = `<p>${key}: ${req.query[key]}</p>`
            }
        } else {
            profilerValues.get = '<p>No GET data exists</p>';
        }
    
        /* Check POST data */
        if (Object.entries(req.body).length > 0) {
            for (let key in req.body) {
                profilerValues.post = `<p>${key}: ${req.body[key]}</p>`;
            }
        } else {
            profilerValues.post = '<p>No POST data exists</p>';
        }

        /* Check SESSION data */
        if (Object.entries(req.session).length > 1) {
            for (let key in req.session) {
                if (key === 'cookie') continue;
                profilerValues.session = `<p>${key}: ${req.session[key]}</p>`;
            }
        } else {
            profilerValues.session = '<p>No SESSION data exists</p>';
        }

        /* Check QUERY */
        if (getLastQuery()) {
            profilerValues.sqlQuery = `<p>${getLastQuery()}</p>`;
        } else {
            profilerValues.sqlQuery = '<p>No Query</p>';
        }

        const endTime = process.hrtime();
        const executionTime = (endTime[0] - startTime[0]) * 1000 + (endTime[1] - startTime[1]) / 1000000;
    
        profilerValues.executionTime = `<p>Execution Time: ${executionTime.toFixed(2)} ms</p>`;
    
        const renderedProfiler = ejs.render(profilerTemplate, profilerValues);
    
        res.render(view, data, (err, html) => {
            if (err) throw err;
    
            const modifiedHTML = html + renderedProfiler;
            res.send(modifiedHTML);
        });
    }
}

module.exports = Profiler;