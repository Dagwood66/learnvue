let gulp = require("gulp");
let browserSync = require('browser-sync');

gulp.task("default", function () {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch("src/**/*.*", browserSync.reload);
});