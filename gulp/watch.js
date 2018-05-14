var gulp = require("gulp"),
    watch = require('gulp-watch'),
    config = require("../config");

gulp.task('watch', function(){
    watch([config.watch.html], function() {
        gulp.start('html:build');
    });
    watch([config.watch.style], function() {
        gulp.start('style:build');
    });
    watch([config.watch.js], function() {
        gulp.start('js:build');
    });
    watch([config.watch.img], function() {
        gulp.start('img:build');
    });
    watch([config.watch.fonts], function() {
        gulp.start('fonts:build');
    });
});