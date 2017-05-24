/**
* HTML tasks
* ----------------
* Reads pattern library pages data
* Compiles pattern library templates
* Minifies HTML (production only)
* Copies HTML files into dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		gulp.src([paths.html.src, '!' + paths.html.templates + '**/*html'])
		.pipe(plugins.data(function(file) {
			return require('.' + paths.data.src);
		}))
		.pipe(plugins.nunjucksRender({
			path: [paths.html.templates]
		}))
		.pipe(plugins.if(config.isProduction, plugins.htmlmin(config.htmlMin)))
		.pipe(gulp.dest(paths.html.dist))
	};
};