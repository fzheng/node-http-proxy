/*
 proxy-handle-redirect.js handle redirection in reverse proxy to avoid redirect breaking current session

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

var https = require('https'),
  http  = require('http'),
  util  = require('util'),
  path  = require('path'),
  fs    = require('fs'),
  colors = require('colors'),
  httpProxy = require('../../lib/http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
//httpProxy.createProxyServer({
//  target: 'https://google.com',
//  agent  : https.globalAgent,
//  headers: {
//    host: 'google.com'
//  }
//}).listen(8011);
httpProxy.createProxyServer({
  agent  : http.globalAgent,
  target: {
    host: 'www1.macys.com'
  },
  url: 'http://www.macys.com/catalog/index.ognc?CategoryID=9915&cm_sp=us_hdr-_-bed-%26-bath-_-9915_sheets',
  headers: {
    host: 'www1.macys.com'
  }
}).listen(8011);

util.puts('http proxy server'.blue + ' started '.green.bold + 'on port '.blue + '8011'.yellow);