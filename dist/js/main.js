"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestoDeJuan = new _Impuestos["default"](2500000, 300000);
var juan = new _Cliente["default"]('Juan', impuestoDeJuan);
console.log(juan.calcularImpuesto());