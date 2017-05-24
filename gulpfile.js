var gulp = require('gulp');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
	return gulp.src('src/html/*.html')
	.pipe(data(function(file) {
		return require('./src/pages.json');
	}))
	.pipe(nunjucksRender({
		path: ['src/html/templates/']
	}))
	.pipe(gulp.dest('dist'));
});