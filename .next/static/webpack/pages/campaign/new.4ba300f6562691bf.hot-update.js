"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaign/new",{

/***/ "./pages/campaign/new.js":
/*!*******************************!*\
  !*** ./pages/campaign/new.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(), web3 = ref.web3, networkId = ref.networkId;\n    var leftContents = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        __source: {\n            fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n            lineNumber: 7,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {\n                icon: \"pi pi-arrow-left\",\n                className: \"p-button-secondary p-button-text\",\n                onClick: router.back,\n                __source: {\n                    fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                    lineNumber: 8,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"p-text-bold\",\n                __source: {\n                    fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                    lineNumber: 9,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: \"New Campaign\"\n            })\n        ]\n    });\n    var rightContents = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        __source: {\n            fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n            lineNumber: 14,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {\n            icon: \"pi pi-plus\",\n            className: \"p-button-rounded\",\n            onClick: function() {\n                return router.push('campaign/new');\n            },\n            __source: {\n                fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            },\n            __self: _this\n        })\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"card p-4\",\n        __source: {\n            fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n            lineNumber: 20,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Toolbar, {\n                left: leftContents,\n                right: rightContents,\n                __source: {\n                    fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                    lineNumber: 21,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Panel, {\n                className: \"card-container purple-container\",\n                __source: {\n                    fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                    lineNumber: 22,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Volumes/WORK/study/1.solidity/lottery-solidity/client/pages/campaign/new.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: campaigns\n                })\n            })\n        ]\n    }));\n}, \"GzilOUZEbH1mOnFe8ACYgXQbllM=\"));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbi9uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5Qzs7O0FBRXpDLCtEQUFlLEdBQUFFLFFBQVEsQ0FBUkEsS0FBSyxFQUFJLENBQUM7O0lBQ3hCLEdBQUssQ0FBdUJELEdBQVksR0FBWkEsaURBQVUsSUFBOUJFLElBQUksR0FBZ0JGLEdBQVksQ0FBaENFLElBQUksRUFBRUMsU0FBUyxHQUFLSCxHQUFZLENBQTFCRyxTQUFTO0lBRXZCLEdBQUssQ0FBQ0MsWUFBWSx5RUFDaEJMLHVEQUFjOzs7Ozs7OztpRkFDYk8sTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLENBQWtCO2dCQUFDQyxTQUFTLEVBQUMsQ0FBa0M7Z0JBQUNDLE9BQU8sRUFBRUMsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7OztpRkFDaEdDLENBQUc7Z0JBQUNKLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzBCQUFDLENBQVk7Ozs7SUFJM0MsR0FBSyxDQUFDSyxhQUFhLHdFQUNqQmQsdURBQWM7Ozs7Ozs7dUZBQ2JPLE1BQU07WUFBQ0MsSUFBSSxFQUFDLENBQVk7WUFBQ0MsU0FBUyxFQUFDLENBQWtCO1lBQUNDLE9BQU8sRUFBRSxRQUFRO2dCQUFGQyxNQUFNLENBQU5BLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQWM7Ozs7Ozs7Ozs7SUFJbEcsTUFBTSx1RUFDSkYsQ0FBRztRQUFDSixTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7aUZBQ3ZCTyxPQUFPO2dCQUFDQyxJQUFJLEVBQUVaLFlBQVk7Z0JBQUVhLEtBQUssRUFBRUosYUFBYTs7Ozs7Ozs7aUZBQ2hESyxLQUFLO2dCQUFDVixTQUFTLEVBQUMsQ0FBaUM7Ozs7Ozs7K0ZBQ2hESSxDQUFHOzs7Ozs7OzhCQUFFTyxTQUFTOzs7OztBQUluQixDQUFDLG1DQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWduL25ldy5qcz9iYzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcblx0Y29uc3QgeyB3ZWIzLCBuZXR3b3JrSWQgfSA9IHVzZUNvbnRleHQoKTtcblxuXHRjb25zdCBsZWZ0Q29udGVudHMgPSAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PEJ1dHRvbiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeSBwLWJ1dHRvbi10ZXh0XCIgb25DbGljaz17cm91dGVyLmJhY2t9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtdGV4dC1ib2xkXCI+TmV3IENhbXBhaWduPC9kaXY+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcblxuXHRjb25zdCByaWdodENvbnRlbnRzID0gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxCdXR0b24gaWNvbj1cInBpIHBpLXBsdXNcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJ2NhbXBhaWduL25ldycpfSAvPlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC00XCI+XG5cdFx0XHQ8VG9vbGJhciBsZWZ0PXtsZWZ0Q29udGVudHN9IHJpZ2h0PXtyaWdodENvbnRlbnRzfSAvPlxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyIHB1cnBsZS1jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdj57Y2FtcGFpZ25zfTwvZGl2PlxuXHRcdFx0PC9QYW5lbD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwicHJvcHMiLCJ3ZWIzIiwibmV0d29ya0lkIiwibGVmdENvbnRlbnRzIiwiRnJhZ21lbnQiLCJCdXR0b24iLCJpY29uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInJvdXRlciIsImJhY2siLCJkaXYiLCJyaWdodENvbnRlbnRzIiwicHVzaCIsIlRvb2xiYXIiLCJsZWZ0IiwicmlnaHQiLCJQYW5lbCIsImNhbXBhaWducyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaign/new.js\n");

/***/ })

});