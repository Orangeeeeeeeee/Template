var gulp        = require("gulp"),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber'),    
    reload      = browserSync.reload,
    config      = require("../config");


gulp.task('img:build', function () {
    gulp.src(config.src.img) //Выберем наши картинки
        .pipe(plumber())
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});