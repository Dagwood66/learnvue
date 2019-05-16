let gulp = require("gulp");
let browserSync = require('browser-sync');

gulp.task("default", function () {
    browserSync({
        server: {
            host: "192.168.0.246",
            baseDir: 'src'
        }
    });
    gulp.watch("src/**/*.*", browserSync.reload);
});