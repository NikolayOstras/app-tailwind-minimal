import gulpFileInclude from 'gulp-file-include'
export const html = () => {
		return app.gulp.src(app.path.src.html)
				.pipe(app.plugins.plumber(
						app.plugins.notify.onError({
								title: "HTML",
								message: "Error <%= error.message %>"
						})
				))
				.pipe(gulpFileInclude(
					{
						prefix: '>>',
						basepath: '@file'
					}
				))
				.pipe(app.gulp.dest(app.path.build.html))
				.pipe(app.plugins.browsersync.stream())
}