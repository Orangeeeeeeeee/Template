var gulp = require("gulp"),
    spritesmith = require("gulp.spritesmith"),
    cssUrls = require('gulp-css-urls'),
    config = require("../config");


gulp.task('pngSpriteBuild', function () {
    var spriteData =
        gulp.src([config.src.png, config.ignor.png]) // путь, откуда берем картинки для спрайта
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_spritepng.scss',
            algorithm: 'binary-tree'
        }));

    spriteData.img.pipe(gulp.dest('src/img/icons-png/')); // путь, куда сохраняем картинку
    spriteData.css
    .pipe(cssUrls(function (url) {
        return "../img/icons-png/" + url;
    }))
    .pipe(gulp.dest('src/styles/')); // путь, куда сохраняем стили
});
