// import React from 'react';
// import {render, Text} from 'ink';
// const Demo = () => <Text>Hello World</Text>;
// render(<Demo />);
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var React = require("react");

var _require = require("react"),
    useEffect = _require.useEffect,
    useState = _require.useState,
    useRef = _require.useRef;

var _require2 = require("ink"),
    Text = _require2.Text,
    Box = _require2.Box,
    measureElement = _require2.measureElement,
    Newline = _require2.Newline,
    render = _require2.render;

var statusOutput = require("./gitStatusOutput");

var Renderer = require("./components/divider");

var gitBranchCall = require('./currentBranch');

var enterAltScreenCommand = '\x1b[?1049h';
var leaveAltScreenCommand = '\x1b[?1049l';

var exitFullScreen = function exitFullScreen() {
  process.stdout.write(leaveAltScreenCommand);
};

var App = function App() {
  var _React$createElement;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      branch = _useState4[0],
      setBranch = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      appWidth = _useState6[0],
      setWidth = _useState6[1];

  var ref = useRef(null);
  useEffect(function () {
    var intervalStatusCheck = setInterval(function () {
      setStatus(statusOutput());
      setBranch(gitBranchCall());
    }, 1000);
    exitFullScreen();
    process.stdout.write(enterAltScreenCommand);

    var _measureElement = measureElement(ref.current),
        width = _measureElement.width,
        height = _measureElement.height;

    setWidth(width);
    return function () {
      clearInterval(intervalStatusCheck);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Box, {
    borderStyle: "round",
    borderColor: "red",
    className: "full-app",
    height: 20,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    className: "left-box",
    width: "50%",
    height: "100%",
    flexDirection: "column",
    ref: ref // flexGrow={1}

  }, /*#__PURE__*/React.createElement(Box, {
    className: "changed-files",
    height: "50%"
  }, /*#__PURE__*/React.createElement(Box, {
    height: "100%"
  }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(Text, {
    color: "red",
    bold: true,
    underline: true
  }, "Unstaged Changes"), /*#__PURE__*/React.createElement(Newline, null), status.unstaged))), /*#__PURE__*/React.createElement(Text, {
    color: "red"
  }, /*#__PURE__*/React.createElement(Newline, null), /*#__PURE__*/React.createElement(Renderer, {
    width: appWidth
  })), /*#__PURE__*/React.createElement(Box, {
    className: "stage-area",
    height: "50%"
  }, /*#__PURE__*/React.createElement(Box, {
    height: "100%"
  }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(Text, {
    color: "red",
    bold: true,
    underline: true
  }, "Staged Changes"), /*#__PURE__*/React.createElement(Newline, null), status.staged)))), /*#__PURE__*/React.createElement(Box, (_React$createElement = {
    className: "gitBranch",
    borderStyle: "round",
    borderColor: "red"
  }, _defineProperty(_React$createElement, "className", "left-box"), _defineProperty(_React$createElement, "width", "50%"), _defineProperty(_React$createElement, "margin", "-1"), _React$createElement), /*#__PURE__*/React.createElement(Text, null, "Git Branch --", '>', " ", branch)));
};

render( /*#__PURE__*/React.createElement(App, null));
