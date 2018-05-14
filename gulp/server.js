var gulp   = require("gulp"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    config = require("../config");

    gulp.task('server', function () {
        browserSync(config.server);
    });

