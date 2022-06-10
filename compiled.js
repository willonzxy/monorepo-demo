"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(
  require("@babel/runtime-corejs3/core-js/promise")
);

// export const foo = () => {
//   return new Promise(res => res(1));
// };
// export const goo = [1, ...[1]];
// export const test = "paths";
var foo = function foo() {
  return new _promise.default(function (res) {
    return res(1);
  });
};

console.log(foo);
