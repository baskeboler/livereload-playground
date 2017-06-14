# livereload-playground

Very basic local livereload server for html/js/scss sketches

## Default settings

By default you get an empty index.html that includes:
* Bootstrap cdn css
* our own scss/style.css
* an empty script.js inside js/ directory

I have included a .bowerrc file in the project that sets the bower components directory to js/bower_components, so if you add a dependency with bower livereload will trigger a reload.

## Get running
* Install dependencies
  * (optional) install http-server (`npm i http-server -g`)
  * either with yarn or npm (`yarn install` or `npm i`)
* `gulp watch`
* start a local http-server in the project directory
  * `http-server .`
* open browser in `http://localhost:8080` (or whichever port you started the http server on)
* edit index.html, css and js files and when saved changes should be automatically refreshed in browser.