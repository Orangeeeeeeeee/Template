var gulp = require("gulp"),
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    cssUrls = require('gulp-css-urls'),
    config = require("../config");

gulp.task('svgBuild', function () {
    return gulp.src([config.src.svg,config.ignor.svg])
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            preview: false,
            cssFile: "scss/_spritesvg.scss",

        }))
        .pipe(gulp.dest(config.build.tmp));

});

gulp.task('routesvg', ['svgBuild'], function () {
    gulp.src('tmp/scss/_spritesvg.scss')
        .pipe(cssUrls(function (url) {
            return "../img/icons-svg" + url.replace("../svg", "");
        }))
        .pipe(gulp.dest('src/styles'));
    gulp.src('tmp/svg/sprite.svg')
        .pipe(gulp.dest('src/img/icons-svg'));
});



gulp.task('svgSpriteBuild', ['svgBuild', 'routesvg']);