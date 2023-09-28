const Mysql = require('mysql2');

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sports_players'
}

const connection = Mysql.createConnection(dbOptions);

function connect() {
    connection.connect((err) => {
        if (err) {
            connect();
        } else {
            console.log('Connected as id ' + connection.threadId);
        }
    });
}

connect();

function executeQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

module.exports = executeQuery;