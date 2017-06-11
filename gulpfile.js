var gulp = require('gulp');
var livereload = require('gulp-livereload');

function dest(){
    return gulp.dest('build');
}

gulp.task('html', function(){
    return gulp.src('index.html')
        .pipe(dest())
        .pipe(livereload());
});

gulp.task('js', function() {
    gulp.src('js/**/*.js', {base: '.'})
        .pipe(dest())
        .pipe(livereload())
});
gulp.task('css', function(){
    return gulp.src('css/**/*.css', {base: '.'})
        .pipe(dest())
        .pipe(livereload());
})
gulp.task('default', ['html', 'js', 'css']);

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('index.html', ['html']);
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('css/**/*.css', ['css']);
})