'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inherit;\n  stroke: ', ';\n  stroke-width: 7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  margin: 7.5px;\n  cursor: ', ';\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n'], ['\n  display: inherit;\n  stroke: ', ';\n  stroke-width: 7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  margin: 7.5px;\n  cursor: ', ';\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Svg = _styledComponents2.default.svg(_templateObject, function (props) {
  return props.isStartItem || props.isEndItem ? 'transparent' : 'white';
}, function (props) {
  return props.isStartItem || props.isEndItem ? 'initial' : 'pointer';
}, function (props) {
  return props.start ? 'rotate(180deg)' : 'rotate(0)';
}, function (props) {
  return props.start ? 'rotate(-90deg)' : 'rotate(90deg)';
});

exports.default = Svg;