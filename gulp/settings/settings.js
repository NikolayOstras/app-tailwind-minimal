// path
export const path = {
	build: {
		html: './build/',
		css: './build/css/',
		js: './build/js/',
	},
	src: {
		html: './src/*.html',
		css: './src/css/style.css',
		js: './src/js/app.js',
	},
}

// plugins

import browsersync from 'browser-sync'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'

export const plugins = {
	notify,
	plumber,
	rename,
	browsersync,
}
