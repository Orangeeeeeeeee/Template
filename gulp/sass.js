var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require('gulp-sourcemaps'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    reload = browserSync.reload,
    config = require("../config");

gulp.task("style:build", function(){
    return gulp.src(config.src.style)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        // .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.css))
        .pipe(reload({stream: true}));
});