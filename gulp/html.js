var gulp   = require("gulp"),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload,
    config = require("../config");

gulp.task('html:build', function () {
    gulp.src(config.src.html) //Выберем файлы по нужному пути
        .pipe(plumber())
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(config.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});