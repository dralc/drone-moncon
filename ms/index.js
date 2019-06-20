const { send } = require('micro');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    send(res, 200, 'index ok');
}