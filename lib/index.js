'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v2.2.8 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{-webkit-text-size-adjust:100%;line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;margin:0}hr{color:inherit;height:0}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{border:0 solid;box-sizing:border-box}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,:after,:before{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.table{display:table}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}@keyframes bounce{0%,to{-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}*,:after,:before{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}";
styleInject(css_248z,{"insertAt":"top"});

var Button = function Button(_ref) {
  var color = _ref.color,
      variant = _ref.variant;
  var themeColor;

  switch (color) {
    case "success":
      themeColor = "blue-500";
      break;

    case "error":
      themeColor = "red-500";
      break;

    case "secondary":
      themeColor = "green-400";
      break;

    default:
      themeColor = "orange-400";
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "p-3 font-sans ".concat(variant === "outlined" ? "bg-transparent border-2 dark:text-gray-50 border-".concat(themeColor, " hover:bg-").concat(themeColor, " focus:bg-").concat(themeColor) : "bg-".concat(themeColor, " ring-offset-1 hover:ring-2 hover:ring-").concat(themeColor, " focus:ring-2 focus:ring-").concat(themeColor))
  }, "Hello world");
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
