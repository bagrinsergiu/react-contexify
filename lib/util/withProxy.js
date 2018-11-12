"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (Component) {
  return function (_PureComponent) {
    _inherits(WithProxy, _PureComponent);

    function WithProxy() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WithProxy);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithProxy.__proto__ || Object.getPrototypeOf(WithProxy)).call.apply(_ref, [this].concat(args))), _this), _this.node = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WithProxy, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.appendToBody(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeFromBody();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.removeFromBody();
        this.appendToBody(nextProps);
      }
    }, {
      key: "removeFromBody",
      value: function removeFromBody() {
        (0, _reactDom.unmountComponentAtNode)(this.node);
        // document.body.removeChild(this.node);
        this.node.parentElement && this.node.parentElement.removeChild(this.node);
      }
    }, {
      key: "appendToBody",
      value: function appendToBody(props) {
        var container = document.createElement("div");
        this.node = document.body.appendChild(container);
        (0, _reactDom.render)(_react2.default.createElement(Component, _extends({}, props, { key: props.id })), this.node);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return WithProxy;
  }(_react.PureComponent);
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }