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
var sitemap = require('gulp-sitemap');


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
        'resources/js/universal/images/photoupload.js',
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
        'resources/js/universal/images/photoupload.js',
        'resources/js/client/photowidget.js',
        'resources/js/client/reportissue.js',
        'resources/js/client/profilemodal.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('client.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});


/*******************************************
/               RATING PAGE
/******************************************/

// MAPS CUSTOM SASS ======================
gulp.task('rating-custom-sass', function() {
    gulp.src([
        'resources/sass/rating/rating.scss'
        ])
        .pipe(concat('rating.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/'))
});

// MAPS CUSTOM JS ========================
gulp.task('rating-custom-js', function() {
    return gulp.src([
        'resources/js/rating/rating.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('rating.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});


/*******************************************
/               HOME PAGE
/******************************************/

// MAPS CUSTOM SASS ======================
gulp.task('home-custom-sass', function() {
    gulp.src([
        'resources/sass/templates/navmenu.scss',
        'resources/sass/templates/footerlinks.scss',
        'resources/sass/templates/motiongraphic.scss',
        'resources/sass/maps/home.scss'
        ])
        .pipe(concat('home.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/'))
});

// MAPS CUSTOM JS ========================
gulp.task('home-custom-js', function() {
    return gulp.src([
        'resources/js/templates/navmenu.js',
        'resources/js/templates/footerlinks.js',
        'resources/js/templates/motiongraphic.js',
        'resources/js/maps/home.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('home.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});


/*******************************************
/               ABOUT PAGE
/******************************************/

// ABOUT CUSTOM SASS ======================
gulp.task('about-custom-sass', function() {
    gulp.src([
        'resources/sass/templates/navmenu.scss',
        'resources/sass/templates/footerlinks.scss',
        'resources/sass/templates/motiongraphic.scss',
        'resources/sass/learn/about/about.scss'
        ])
        .pipe(concat('about.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/learn/'))
});

// ABOUT CUSTOM JS ========================
gulp.task('about-custom-js', function() {
    return gulp.src([
        'resources/js/templates/navmenu.js',
        'resources/js/templates/footerlinks.js',
        'resources/js/templates/motiongraphic.js',
        'resources/js/learn/about/about.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('about.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/learn/'))
});


/*******************************************
/               BLOG PAGE
/******************************************/

// BLOG CUSTOM SASS ======================
gulp.task('blog-custom-sass', function() {
    gulp.src([
        'resources/sass/templates/navmenu.scss',
        'resources/sass/learn/blog/blog.scss'
        ])
        .pipe(concat('blog.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/learn/'))
});

// BLOG CUSTOM JS ========================
gulp.task('blog-custom-js', function() {
    return gulp.src([
        'resources/js/templates/navmenu.js',
        'resources/js/learn/blog/blog.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('blog.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/learn/'))
});


/*******************************************
/                HELP PAGE
/******************************************/

// HELP CUSTOM SASS ======================
gulp.task('help-custom-sass', function() {
    gulp.src([
        'resources/sass/learn/help/help.scss'
        ])
        .pipe(concat('help.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/learn/'))
});

// HELP CUSTOM JS ========================
gulp.task('help-custom-js', function() {
    return gulp.src([
        'resources/js/learn/help/help.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('help.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/learn/'))
});


/*******************************************
/                MISTAKE PAGE
/******************************************/

// MISTAKE CUSTOM SASS ======================
gulp.task('mistake-custom-sass', function() {
    gulp.src([
        'resources/sass/learn/mistake/mistake.scss'
        ])
        .pipe(concat('mistake.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/app/styles/learn/'))
});

// MISTAKE CUSTOM JS ========================
gulp.task('mistake-custom-js', function() {
    return gulp.src([
        'resources/js/learn/mistake/mistake.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('mistake.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/learn/'))
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
        'node_modules/animate.css/animate.min.css',
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
        'resources/js/universal/images/resize.js',
        'resources/js/universal/google/analytics.js',
        'resources/js/universal/api/' + (gutil.env.api ? gutil.env.api : 'test') + 'api.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) // uglify with '--type production'
    .pipe(gulp.dest('./public/app/js/'))
});

/*******************************************
/                SITEMAP
/******************************************/
gulp.task('sitemap', function () {
    gulp.src('public/**/*.html', { read: false })
    .pipe(sitemap({ siteUrl: 'https://www.hairbrain.ca' }))
    .pipe(gulp.dest('public/'));
});


/*******************************************
/                 TASKS
/******************************************/

// DEFAULT TASK ============================
gulp.task('default', [
    'login-custom-sass',   'login-custom-js',
    'client-custom-sass',  'client-custom-js', 
    'rating-custom-sass',  'rating-custom-js',
    'home-custom-sass',    'home-custom-js',
    'about-custom-sass',   'about-custom-js',
    'blog-custom-sass',    'blog-custom-js',
    'help-custom-sass',    'help-custom-js',
    'mistake-custom-sass', 'mistake-custom-js',
    'vendor-css',          'vendor-js'
]);

// WATCH TASK ============================
gulp.task('watch', function() {
    gulp.watch([
        'resources/js/**/*.js',
        'resources/sass/**/*.scss'
    ], ['default']);
});