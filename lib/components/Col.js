'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModificatorType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]);

var propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  reverse: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.reverse) {
    extraClasses.push(_flexboxgrid2.default.reverse);
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _flexboxgrid2.default[Number.isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses).join(' ');
}

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col(props) {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Col.prototype.render = function render() {
    var className = getClassNames(this.props);

    return _react2.default.createElement(this.props.tagName || 'div', (0, _createProps2.default)(propTypes, this.props, className));
  };

  return Col;
}(_react.Component);

Col.propTypes = propTypes;
exports.default = Col;