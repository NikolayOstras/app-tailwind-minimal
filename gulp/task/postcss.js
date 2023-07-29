import postcss from 'gulp-postcss'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import tailwindcss from 'tailwindcss'
import tailwindConfig from '../../tailwind.config.cjs'
const plugins = [
	tailwindcss(tailwindConfig),
	postcssImport,
	postcssNested
]
export const post = () => {
	return app.gulp
		.src(`${app.path.src.css}`)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'POSTCSS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(postcss(plugins))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
