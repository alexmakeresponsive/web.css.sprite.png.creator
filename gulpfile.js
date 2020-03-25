var gulp          = require('gulp');
var spritesmith   = require('gulp.spritesmith');

gulp.task('sprite', function(cb) {
    var spriteData =
        gulp.src('./conveyor/src/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }));

    spriteData.img.pipe(gulp.dest('./conveyor/dist/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./conveyor/dist/')); // путь, куда сохраняем стили

    cb();
});
