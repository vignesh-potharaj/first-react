"use strict";

var continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Australia', 'South America'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello! ".concat(c, "!");
});
var message = helloContinents.join('');
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById('content'));