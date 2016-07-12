var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir(function(mix) {
//    mix.sass('app.scss');
//});

elixir(function(mix) {
     // ES2015のコンバート
     // JSXシンタックスをJavascriptにコンバート
     // 他に何かやってるのかな…?
  mix.browserify('sample.jsx')
     .browserify('sampleList.jsx')
     // バージョニング
     // 更新が確実にブラウザに反映されるようになる
     .version(['js/sample.js',
                'js/sampleList.js']);
});
