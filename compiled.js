"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.goo = exports.foo = void 0;

var _promise = _interopRequireDefault(
  require("@babel/runtime-corejs3/core-js/promise")
);

var _concat = _interopRequireDefault(
  require("@babel/runtime-corejs3/core-js/instance/concat")
);

var _context;

var foo = function foo() {
  return new _promise.default(function (res) {
    return res(1);
  });
};

exports.foo = foo;
var goo = (0, _concat.default)((_context = [1])).call(_context, [1]);
exports.goo = goo;
var test = "paths";
exports.test = test;
