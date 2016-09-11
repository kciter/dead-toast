'use strict';

var gulp = require('gulp'), 
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	gulpUtil = require('gulp-util'),
	rename = require('gulp-rename')

gulp.task('sass', function() {
	gulp.src('dead-toast.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename('dead-toast.min.css'))
		.pipe(gulp.dest('.'));
});

gulp.task('build', function() {
	gulp.src('dead-toast.js')
		.on('error', function(err) { console.error(err); this.emit('end'); })
		.pipe(uglify().on('error', gulpUtil.log))
		.pipe(rename('dead-toast.min.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['sass', 'build'])
