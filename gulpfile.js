import gulp from 'gulp'
import { path, plugins } from './gulp/settings/settings.js'

import { build } from './gulp/task/build.js'
import { css } from './gulp/task/css.js'
import { html } from './gulp/task/html.js'
import { post } from './gulp/task/postcss.js'
import { server } from './gulp/task/server.js'
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

const watcher = () => {
	gulp.watch('./src/**/*.html', html)
	gulp.watch('./src/**/*.css', post)
	gulp.watch('./src/js/**/*.js', build)
}
const buildApp = gulp.series(html, post, build, css)
const dev = gulp.series(
	html,
	post,
	build,
	gulp.parallel(watcher, server)
)

gulp.task('build', buildApp)
gulp.task('dev', dev)
