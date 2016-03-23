var gulp = require('gulp');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');

gulp.task('build', function() {
  return gulp.src([ 'src/**/*.ts' ])
    .pipe(typescript({ declaration: true }))
    .js
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./build'));
});
