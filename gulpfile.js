/*******************************************
* © 2017 Hairbrain inc.
* ---------------------
* Created: February 11th 2017
* Last Modified: March 21st 2017
* Author: Charlie Hay
*
* GULPFILE.JS
/******************************************/

var gulp  = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

/*******************************************
/              LOGIN PAGE
/******************************************/

// LOGIN CUSTOM SASS ======================
gulp.task('login-custom-sass', function() {
    gulp.src([
        'resources/sass/login/login.scss',
        'resources/sass/login/register.scss',
        'resources/sass/login/menu.scss'
        ])
        .pipe(concat('login.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/'))
});

// LOGIN CUSTOM JS ========================
gulp.task('login-custom-js', function() {
    return gulp.src([
        'resources/js/login/login.js',
        'resources/js/login/register.js',
        'resources/js/login/menu.js',
        'resources/js/universal/photoupload.js',
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('login.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});

/*******************************************
/              CLIENT PAGE
/******************************************/

// CLIENT CUSTOM SASS ======================
gulp.task('client-custom-sass', function() {
    gulp.src('resources/sass/client/*.scss')
        .pipe(concat('client.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/'))
});

// CLIENT CUSTOM JS ======================
gulp.task('client-custom-js', function() {
    return gulp.src([
        'resources/js/client/base.js',
        'resources/js/client/clientadd.js',
        'resources/js/client/menu.js',
        'resources/js/client/nav.js',
        'resources/js/client/clientprofile.js',
        'resources/js/client/clientlist.js',
        'resources/js/universal/photoupload.js',
        'resources/js/client/photowidget.js',
        'resources/js/client/reportissue.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('client.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});

/*******************************************
/               RATE PAGE
/******************************************/

// RATE CUSTOM SASS ======================
gulp.task('rate-custom-sass', function() {
    gulp.src('resources/sass/rate/rate.scss')
        .pipe(concat('rate.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/'))
});

// RATE CUSTOM JS ========================
gulp.task('rate-custom-js', function() {
    return gulp.src([
        'resources/js/rate/rate.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('rate.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});

/*******************************************
/                VENDOR
/******************************************/

// VENDOR CSS ============================
gulp.task('vendor-css', function () {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/normalize-css/normalize.css',
        'resources/sass/universal/base.scss'
        ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./public/app/styles/'))
});

// VENDOR JS ============================
gulp.task('vendor-js', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/moment/moment.js',
        'node_modules/jquery.cookie/jquery.cookie.js',
        'node_modules/jquery-validation-dist/dist/jquery.validate.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
        'resources/js/vendor/resize.js',
        'resources/js/vendor/analytics.js',
        'resources/js/universal/' + (gutil.env.api ? gutil.env.api : 'test') + 'api.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});

/*******************************************
/                 TASKS
/******************************************/

// DEFAULT TASK ============================
gulp.task('default', [
    'login-custom-sass', 'login-custom-js',
    'client-custom-sass', 'client-custom-js', 
    'rate-custom-sass', 'rate-custom-js',
    'vendor-css', 'vendor-js'
]);

// WATCH TASK ============================
gulp.task('watch', function() {
    gulp.watch([
        'resources/js/*/*.js',
        'resources/sass/*/*.scss'
    ], ['default']);
});