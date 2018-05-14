var gulp        = require("gulp"),
    config      = require("../config");

gulp.task('fonts:build', function() {
    gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.build.fonts))
});