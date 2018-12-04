var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  prefix = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin');





gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(plumber())
    .pipe(prefix('last 2 versions'))
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
})

gulp.task('compress', function () {
  gulp.src('app/primage/*')
    .pipe(imagemin({ optimization: 7 }))
    .pipe(gulp.dest('app/img'));

})
gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);

})

gulp.task('default', ['sass', 'watch', 'compress',]);