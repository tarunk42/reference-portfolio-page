self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif" // main: "Space Grotesk, sans-serif"

  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#49d4d0",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbImZvbnRzIiwidGl0bGUiLCJjb2xvcnMiLCJwcmltYXJ5MSIsImJhY2tncm91bmQxIiwiYWNjZW50MSIsImJ1dHRvbiIsImJhY2tncm91bmQyIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBZTtBQUNiO0FBQ0FBLE9BQUssRUFBRTtBQUNMQyxTQUFLLEVBQUUsMkJBREYsQ0FFTDs7QUFGSyxHQUZNO0FBTWI7QUFDQUMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRSxzQkFESjtBQUVOQyxlQUFXLEVBQUUsU0FGUDtBQUdOQyxXQUFPLEVBQUUsdUJBSEg7QUFJTkMsVUFBTSxFQUFFLHVCQUpGO0FBS05DLGVBQVcsRUFBRTtBQUxQLEdBUEs7QUFjYjtBQUNBQyxhQUFXLEVBQUU7QUFDWEMsTUFBRSxFQUFFLCtCQURPO0FBRVhDLE1BQUUsRUFBRSwrQkFGTztBQUdYQyxNQUFFLEVBQUUsZ0NBSE87QUFJWEMsTUFBRSxFQUFFO0FBSk87QUFmQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjMxM2Q4ODkwZGNhNzk5OWJmMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gVGVtcCBmb250c1xuICBmb250czoge1xuICAgIHRpdGxlOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIixcbiAgICAvLyBtYWluOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIlxuICB9LFxuICAvLyBDb2xvcnMgZm9yIGxheW91dFxuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5MTogXCJoc2woMjA0LDIzLjglLDk1LjklKVwiLFxuICAgIGJhY2tncm91bmQxOiBcIiM0OWQ0ZDBcIixcbiAgICBhY2NlbnQxOiBcImhzbCgzNC45LDk4LjYlLDcyLjklKVwiLFxuICAgIGJ1dHRvbjogXCJoc2woMjA1LjEsMTAwJSwzNi4xJSlcIixcbiAgICBiYWNrZ3JvdW5kMjogXCJoc2woMjMyLjcsMjcuMyUsMjMuNyUpXCIsXG4gIH0sXG4gIC8vIEJyZWFrcG9pbnRzIGZvciByZXNwb25zaXZlIGRlc2lnblxuICBicmVha3BvaW50czoge1xuICAgIHNtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLFxuICAgIG1kOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLFxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcbiAgICB4bDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSdcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=