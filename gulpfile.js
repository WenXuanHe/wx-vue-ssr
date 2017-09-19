var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function () {
    return gulp.src('src/service/**/*.js')
        .pipe(babel({
            "plugins": ["transform-es2015-modules-commonjs"]
        }))
        .pipe(gulp.dest('servers/'));
});

gulp.task('default', function () {
    gulp.run('watch');
});
gulp.task('watch', ['es6'], function () {
    gulp.watch('src/service/**/*.js', ['es6']);
});