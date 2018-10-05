var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    reload = browserSync.reload,
    config = require("../config");

gulp.task("script:build", function(){
    return gulp.src(config.libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(config.build.js))
        .pipe(reload({stream: true}));
});