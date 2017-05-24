
const data = require('./cv.json')

module.exports = (req, res) => {
    res.status(200).json({ data })
}
