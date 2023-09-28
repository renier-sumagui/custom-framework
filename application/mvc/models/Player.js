const Mysql = require('mysql');
const executeQuery = require('../../config/database.js');

class Player {
    async getAllPlayers() {
        const query = 'SELECT * FROM players;';
        try {
            const players = await executeQuery(query);
            return players;
        } catch (error) {
            throw new Error(error.stack);
        }
    }

    async getPlayers(form) {
        let queryString = 'SELECT * FROM players WHERE ';
        let query;
        const { name, gender, sport, } = form;
        const options = {
            female: 'Female',
            male: 'Male',
            basketball: 1,
            volleyball: 2,
            baseball: 3,
            soccer: 4,
            football: 5
        };

        if (sport) {
            if (typeof sport === 'string') {
                queryString += `sport_id IN (${options[sport]})`;
            } else {
                queryString += 'sport_id IN ('
                for (let value of sport) {
                    queryString += `${options[value]},`;
                }
                queryString = queryString.slice(0, -1) + ')';
            }
        }
        if (gender) {
            if (typeof gender === 'string') {
                queryString += sport ? ` AND gender IN ("${options[gender]}")` : ` gender IN ("${options[gender]}")`;
            } else {
                queryString += sport ? ` AND gender IN (` : ` gender IN (`;
                for (let value of gender) {
                    queryString += `"${options[value]}",`;
                }
                queryString = queryString.slice(0, -1) + ')';
            }
        }
        if (name) {
            if (Object.entries(form).length > 1) {
                queryString += ` AND CONCAT(first_name, " ", last_name) LIKE ?;`;
            } else {
                queryString += ` CONCAT(first_name, " ", last_name) LIKE ?;`;
            }
            query = Mysql.format(queryString, [`%${name}%`]);
        } else {
            query = queryString;
        }

        try {
            const players = await executeQuery(query);
            if (players.length > 0) {
                return { hasPlayers: true, players: players };
            } else {
                return { hasPlayers: false };
            }
        } catch (error) {
            throw new Error(error);
        }

    }
}

module.exports = new Player;