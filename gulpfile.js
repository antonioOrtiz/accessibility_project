var gulp = require('gulp'),
    order = require('gulp-order'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    uncss = require('gulp-uncss'),
    purify = require('gulp-purifycss'),
    sourcemaps = require('gulp-sourcemaps'),

    browserSync = require('browser-sync').create();

var paths = {
    HTML: 'app/*.html',
    SCSS: 'app/_scss/main.scss',
    JS: 'app/_js/*.js',
    publicHTML: 'app/public/',
    publicCSS: 'app/public/css/',
    publicJS: 'app/public/js/',
};

gulp.task('copy-html', function() {
    gulp.src('./app/index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('./app/public'));
});

gulp.task('uncss', function() {
    gulp.src('app/public/css/main.css')
        .pipe(uncss({
            html: ['./app/index.html']
        }))
        .pipe(gulp.dest('./out'));
});

gulp.task('purify-css', function() {
  return gulp.src('app/public/css/main.css')
    .pipe(purify(['./app/_js/*.js', './app/index.html']))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
    return sass('app/_scss/main.scss', {style:'expanded', sourcemap:true})
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.publicCSS))
        .pipe(browserSync.stream())
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

gulp.task('scripts', function() {
    return gulp.src(paths.JS)
        .pipe(sourcemaps.init())
        .pipe(order(['EventUtility.js', 'main.js' ]))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.publicJS))
        //.pipe(uglify())
        //.pipe(gulp.dest(paths.tsJS))
        //.pipe(browserSync.stream())
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

gulp.task('js-watch', ['scripts'], browserSync.reload);

gulp.task('serve', ['styles', 'scripts'], function() {

    browserSync.init({
        server: "./app"
    });
    gulp.watch('app/_scss/main.scss', ['styles']);

    gulp.watch('app/_js/*.js', ['js-watch']).on('change', browserSync.reload);

    gulp.watch(paths.HTML).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
