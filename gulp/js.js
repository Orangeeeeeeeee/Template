var gulp        = require("gulp"),
    rigger      = require('gulp-rigger'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require("gulp-uglify"),
    browserSync = require("browser-sync"),
    plumber     = require('gulp-plumber'), 
    notify      = require('gulp-notify'),
    reload      = browserSync.reload,
    config      = require("../config");


gulp.task('js:build', function () {
    gulp.src(config.src.js) //Найдем наш main файл
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(config.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});