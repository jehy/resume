import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/custom.css';
import '../css/main.css';

const $ = require('jquery');

window.$ = $;
window.jQuery = $;
require('bootstrap');
require('./scripts.js');

// some polyfills:
// require('Respond.js/dest/respond.src');
require('html5shiv/dist/html5shiv.js');
