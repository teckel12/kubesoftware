let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist')
   .sass('src/scss/app.scss', 'dist')
   .browserSync({
     server: true,
     proxy: false
   })
   .autoload({
     jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"],
     'popper.js/dist/umd/popper.js': ['Popper']
    })
   .setPublicPath('dist');
