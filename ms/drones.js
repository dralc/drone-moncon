/** @type {Array<Object>} */
const drones = require('../fixtures/drones');
const { send } = require('micro');
const url = require('url');

module.exports = (req, res) => {
    const urlObj = url.parse(req.url, true);
    let dronesFound = drones;
    queryId = urlObj.query.id;

    if (queryId) {
        dronesFound = drones.filter((drone) => {
            return drone.id.indexOf(queryId) !== -1;
        });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');

    send(res, 200, dronesFound);
}