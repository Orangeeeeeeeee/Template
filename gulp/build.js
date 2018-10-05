var gulp = require("gulp");


gulp.task('build', [
    'html:build',
    'style:build',
    'js:build',
    'img:build',
    'fonts:build',
    'script:build'
]);