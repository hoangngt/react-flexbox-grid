'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModificatorType = _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

var propTypes = {
  reverse: _react.PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function getClassNames(props) {
  var modificators = [_flexboxgrid2.default.row];

  for (var i = 0; i < modificatorKeys.length; ++i) {
    var key = modificatorKeys[i];
    var value = props[key];
    if (value) {
      modificators.push(_flexboxgrid2.default[key + '-' + value]);
    }
  }

  if (props.reverse) {
    modificators.push(_flexboxgrid2.default.reverse);
  }

  return (0, _classnames2.default)(props.className, modificators);
}

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row(props) {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Row.prototype.render = function render() {
    return _react2.default.createElement(this.props.tagName || 'div', (0, _createProps2.default)(propTypes, this.props, getClassNames(this.props)));
  };

  return Row;
}(_react.Component);

Row.propTypes = propTypes;
exports.default = Row;