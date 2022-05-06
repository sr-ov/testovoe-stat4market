const { PATHS } = require('./paths.js')
const gulp = require('gulp')

module.exports = function fonts() {
	return gulp.src(PATHS.src.fonts).pipe(gulp.dest(PATHS.dist.fonts))
}
