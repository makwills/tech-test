var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
});
