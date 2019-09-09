'use strict';

// Register dependencies
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');


gulp.task('scss', function(done) {
	gulp.src('main.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({
      includePaths: "node_modules/inuitcss"
    }).on('error', sass.logError))
		.pipe(postcss([autoprefixer()])) // uses ".browserslistrc"
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./'));
	done();
});
