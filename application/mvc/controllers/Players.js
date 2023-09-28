const PlayerModel = require('../models/Player.js');

class Players {
    async index(req, res) {
        const players = await PlayerModel.getAllPlayers();
        let htmlString = '';
        if (players.length > 0) {
            for (let player of players) {
                const { first_name, last_name, src } = player;
                htmlString += `
                    <div class="card">
                        <img src="${src}" alt="${first_name} ${last_name}" />
                        <p>${first_name} ${last_name}</p>
                    </div>
                `;
            }
        }
        res.render('index', { players: htmlString });
    }

    async search(req, res) {
        const query = req.query;
        console.log(query);
        const result = await PlayerModel.getPlayers(query);
        let htmlString = '';
        if (result.hasPlayers) {
            for (let player of result.players) {
                const { first_name, last_name, src } = player;
                htmlString += `
                    <div class="card">
                        <img src="${src}" alt="${first_name} ${last_name}" />
                        <p>${first_name} ${last_name}</p>
                    </div>
                `;
            }
        }
        res.send({players: htmlString });
    }
}

module.exports = new Players;