var gulp = require("gulp"),
    spritesmith = require("gulp.spritesmith"),
    cssUrls = require('gulp-css-urls'),
    replace = require('gulp-replace'),
    config = require("../config");

gulp.task('pngBuild', function () {

        var spriteData = gulp.src([config.src.png, config.ignor.png]).pipe(spritesmith({
          imgName: 'sprite.png',
          cssName: '_spritepng.css',
          algorithm: 'binary-tree',
          imgPath: '../img/icons-png/sprite.png',
        }));
        return spriteData.pipe(gulp.dest(config.build.tmp+'/png'));

});

gulp.task('routepng', ['pngBuild'], function () {
    gulp.src('tmp/png/_spritepng.scss')
        .pipe(gulp.dest('src/styles'));
    gulp.src('tmp/png/sprite.png')
        .pipe(gulp.dest('src/img/icons-png'));
});

gulp.task('pngSpriteBuild', ['pngBuild', 'routepng']);

