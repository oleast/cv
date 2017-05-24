
const api = require('express').Router()
const cv = require('./cv')

api.get('/cv', cv)

module.exports = api