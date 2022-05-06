const { DIST } = require('./paths.js')
const del = require('del')

module.exports = function cleanDist() {
	return del([DIST])
}
