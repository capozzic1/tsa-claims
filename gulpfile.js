var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('scripts', function() {
  return gulp.src(['public/app.js', 'components/bargraph.component.js', 'components/linechart.component.js', 'services/ClaimService.js']).pipe(concat('bundle.js')).pipe(gulp.dest('./public'));
});
