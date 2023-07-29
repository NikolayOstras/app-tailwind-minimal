export const server = () => {
	app.plugins.browsersync.init({
		server: {
			baseDir: './build',
		},
		reloadDelay: 500,
		injectChanges: true,
		notify: false,
		port: 3000,
	})
}
