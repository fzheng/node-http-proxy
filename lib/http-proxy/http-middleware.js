/**
 * Copyright (C) 2013 Brett Zamir
 * original module name: htteepee
 * https://github.com/brettz9/htteepee
 * @type {Stack|exports}
 */

var stack = require('stack'),
  http = require('http'),
  _hs = http.createServer;

http.createServer = function createServer () {
  'use strict';
  return _hs.call(http,
    stack.apply(stack, Array.prototype.slice.call(arguments))
  );
};

http.createMiddlewareServer = function () {
  'use strict';
  var mws = Array.prototype.slice.call(arguments).reduce(function (arr, arg) {
    return arr.concat(arg); // We only need a single depth, so this is sufficient
  }, []);
  return function createServer () {
    return _hs.call(http,
      stack.apply(stack, mws.concat(Array.prototype.slice.call(arguments))) // We really just need to support one argument for createServer()
    );
  };
};

module.exports = http;