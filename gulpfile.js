var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var pump = require('pump');


var BUILD_DIR = 'build';
var HTML = ['index.html', 'pages/**/*.(html|htm)'];
var JS = 'js/**/*.js';
var STYLES = 'scss/style.scss';

function dest() {
    return gulp.dest(BUILD_DIR);
}

gulp.task('html', function () {
    return gulp.src(HTML)
        .pipe(dest())
        .pipe(livereload());
});

gulp.task('js', function () {
    gulp.src(JS, {
            base: '.'
        })
        .pipe(dest())
        .pipe(livereload())
});
gulp.task('styles', function (cb) {
    pump([
        gulp.src(STYLES),
        sass({}),
        cleanCSS(),
        gulp.dest(BUILD_DIR + '/css'), 
        livereload()
    ], cb);
});

gulp.task('default', ['html', 'js', 'styles']);

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(HTML, ['html']);
    gulp.watch(JS, ['js']);
    gulp.watch(STYLES, ['styles']);
})