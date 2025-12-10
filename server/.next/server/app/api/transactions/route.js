"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transactions/route";
exports.ids = ["app/api/transactions/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Froute&page=%2Fapi%2Ftransactions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Froute&page=%2Fapi%2Ftransactions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_BrightBanker_server_src_app_api_transactions_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/transactions/route.ts */ \"(rsc)/./src/app/api/transactions/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transactions/route\",\n        pathname: \"/api/transactions\",\n        filename: \"route\",\n        bundlePath: \"app/api/transactions/route\"\n    },\n    resolvedPagePath: \"D:\\\\BrightBanker\\\\server\\\\src\\\\app\\\\api\\\\transactions\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_BrightBanker_server_src_app_api_transactions_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/transactions/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjVfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2FjdGlvbnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRyYW5zYWN0aW9ucyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRyYW5zYWN0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDQnJpZ2h0QmFua2VyJTVDc2VydmVyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQnJpZ2h0QmFua2VyJTVDc2VydmVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZ2h0YmFua2VyLXNlcnZlci8/YzU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxCcmlnaHRCYW5rZXJcXFxcc2VydmVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRyYW5zYWN0aW9uc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJhbnNhY3Rpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90cmFuc2FjdGlvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxCcmlnaHRCYW5rZXJcXFxcc2VydmVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRyYW5zYWN0aW9uc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdHJhbnNhY3Rpb25zL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Froute&page=%2Fapi%2Ftransactions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/transactions/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/transactions/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _src_lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _src_models_Transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/models/Transaction */ \"(rsc)/./src/models/Transaction.ts\");\n\n\n\nasync function GET(req) {\n    try {\n        await (0,_src_lib_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)(req);\n        const { searchParams } = new URL(req.url);\n        const kidId = searchParams.get(\"kidId\");\n        const q = kidId ? {\n            kidId\n        } : {};\n        const list = await _src_models_Transaction__WEBPACK_IMPORTED_MODULE_2__.Transaction.find(q).sort({\n            createdAt: -1\n        }).limit(100);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            transactions: list\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90cmFuc2FjdGlvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNYO0FBQ1U7QUFFaEQsZUFBZUcsSUFBSUMsR0FBZ0I7SUFDeEMsSUFBRztRQUNELE1BQU1ILDBEQUFXQSxDQUFDRztRQUNsQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7UUFDeEMsTUFBTUMsUUFBUUgsYUFBYUksR0FBRyxDQUFDO1FBQy9CLE1BQU1DLElBQUlGLFFBQVE7WUFBRUE7UUFBTSxJQUFJLENBQUM7UUFDL0IsTUFBTUcsT0FBTyxNQUFNVCxnRUFBV0EsQ0FBQ1UsSUFBSSxDQUFDRixHQUFHRyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUUsR0FBR0MsS0FBSyxDQUFDO1FBQ3JFLE9BQU9mLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVDLGNBQWNOO1FBQUs7SUFDaEQsRUFBQyxPQUFNTyxHQUFNO1FBQ1gsT0FBT2xCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVHLE9BQU9ELEVBQUVFLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZ2h0YmFua2VyLXNlcnZlci8uL3NyYy9hcHAvYXBpL3RyYW5zYWN0aW9ucy9yb3V0ZS50cz9iN2EyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyByZXF1aXJlQXV0aCB9IGZyb20gJ0Avc3JjL2xpYi9hdXRoJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnQC9zcmMvbW9kZWxzL1RyYW5zYWN0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KXtcbiAgdHJ5e1xuICAgIGF3YWl0IHJlcXVpcmVBdXRoKHJlcSk7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3Qga2lkSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdraWRJZCcpO1xuICAgIGNvbnN0IHEgPSBraWRJZCA/IHsga2lkSWQgfSA6IHt9O1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBUcmFuc2FjdGlvbi5maW5kKHEpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pLmxpbWl0KDEwMCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdHJhbnNhY3Rpb25zOiBsaXN0IH0pO1xuICB9Y2F0Y2goZTphbnkpe1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInJlcXVpcmVBdXRoIiwiVHJhbnNhY3Rpb24iLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJraWRJZCIsImdldCIsInEiLCJsaXN0IiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJsaW1pdCIsImpzb24iLCJ0cmFuc2FjdGlvbnMiLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/transactions/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth),\n/* harmony export */   signToken: () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"dev_secret\";\nasync function signToken(userId) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        uid: userId\n    }, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nasync function requireAuth(req) {\n    const auth = req.headers.get(\"authorization\") || \"\";\n    const token = auth.startsWith(\"Bearer \") ? auth.slice(7) : null;\n    if (!token) throw new Error(\"Unauthorized\");\n    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n    await (0,_db__WEBPACK_IMPORTED_MODULE_2__.dbConnect)();\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findById(payload.uid);\n    if (!user) throw new Error(\"Unauthorized\");\n    return user;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBRU87QUFDTDtBQUVqQyxNQUFNRyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVUsSUFBSTtBQUV0QyxlQUFlRyxVQUFVQyxNQUFjO0lBQzVDLE9BQU9QLHdEQUFRLENBQUM7UUFBRVMsS0FBS0Y7SUFBTyxHQUFHSixZQUFZO1FBQUVPLFdBQVc7SUFBSztBQUNqRTtBQUVPLGVBQWVDLFlBQVlDLEdBQWdCO0lBQ2hELE1BQU1DLE9BQU9ELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQjtJQUNqRCxNQUFNQyxRQUFRSCxLQUFLSSxVQUFVLENBQUMsYUFBYUosS0FBS0ssS0FBSyxDQUFDLEtBQUs7SUFDM0QsSUFBSSxDQUFDRixPQUFPLE1BQU0sSUFBSUcsTUFBTTtJQUM1QixNQUFNQyxVQUFVcEIsMERBQVUsQ0FBQ2dCLE9BQU9iO0lBQ2xDLE1BQU1ELDhDQUFTQTtJQUNmLE1BQU1vQixPQUFPLE1BQU1yQiw4Q0FBSUEsQ0FBQ3NCLFFBQVEsQ0FBQ0gsUUFBUVgsR0FBRztJQUM1QyxJQUFJLENBQUNhLE1BQU0sTUFBTSxJQUFJSCxNQUFNO0lBQzNCLE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmlnaHRiYW5rZXItc2VydmVyLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSAnLi9kYic7XG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICdkZXZfc2VjcmV0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25Ub2tlbih1c2VySWQ6IHN0cmluZyl7XG4gIHJldHVybiBqd3Quc2lnbih7IHVpZDogdXNlcklkIH0sIEpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnN2QnIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUF1dGgocmVxOiBOZXh0UmVxdWVzdCl7XG4gIGNvbnN0IGF1dGggPSByZXEuaGVhZGVycy5nZXQoJ2F1dGhvcml6YXRpb24nKSB8fCAnJztcbiAgY29uc3QgdG9rZW4gPSBhdXRoLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSA/IGF1dGguc2xpY2UoNykgOiBudWxsO1xuICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBwYXlsb2FkID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCkgYXMgYW55O1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocGF5bG9hZC51aWQpO1xuICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJyk7XG4gIHJldHVybiB1c2VyO1xufVxuIl0sIm5hbWVzIjpbImp3dCIsIlVzZXIiLCJkYkNvbm5lY3QiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNpZ25Ub2tlbiIsInVzZXJJZCIsInNpZ24iLCJ1aWQiLCJleHBpcmVzSW4iLCJyZXF1aXJlQXV0aCIsInJlcSIsImF1dGgiLCJoZWFkZXJzIiwiZ2V0IiwidG9rZW4iLCJzdGFydHNXaXRoIiwic2xpY2UiLCJFcnJvciIsInBheWxvYWQiLCJ2ZXJpZnkiLCJ1c2VyIiwiZmluZEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnect: () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) throw new Error(\"Missing MONGODB_URI\");\nlet conn = null;\nasync function dbConnect() {\n    if (conn) return conn;\n    conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n    return conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsSUFBSSxDQUFDQSxhQUFhLE1BQU0sSUFBSUcsTUFBTTtBQUVsQyxJQUFJQyxPQUErQjtBQUU1QixlQUFlQztJQUNwQixJQUFJRCxNQUFNLE9BQU9BO0lBQ2pCQSxPQUFPLE1BQU1MLHVEQUFnQixDQUFDQztJQUM5QixPQUFPSTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZ2h0YmFua2VyLXNlcnZlci8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcbmlmICghTU9OR09EQl9VUkkpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBNT05HT0RCX1VSSScpO1xuXG5sZXQgY29ubjogdHlwZW9mIG1vbmdvb3NlIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKXtcbiAgaWYgKGNvbm4pIHJldHVybiBjb25uO1xuICBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSk7XG4gIHJldHVybiBjb25uO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjb25uIiwiZGJDb25uZWN0IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Transaction.ts":
/*!***********************************!*\
  !*** ./src/models/Transaction.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Transaction: () => (/* binding */ Transaction)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TxSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    kidId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Kid\"\n    },\n    jar: {\n        type: String,\n        enum: [\n            \"save\",\n            \"spend\",\n            \"share\"\n        ]\n    },\n    type: {\n        type: String,\n        enum: [\n            \"deposit\",\n            \"spend\",\n            \"transfer\",\n            \"interest\",\n            \"match\"\n        ]\n    },\n    amount: Number,\n    note: String\n}, {\n    timestamps: true\n});\nconst Transaction = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Transaction || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Transaction\", TxSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1RyYW5zYWN0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxXQUFXLElBQUlELDRDQUFNQSxDQUFDO0lBQzFCRSxPQUFPO1FBQUVDLE1BQU1ILDRDQUFNQSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztJQUFNO0lBQ2pEQyxLQUFLO1FBQUVKLE1BQU1LO1FBQVFDLE1BQU07WUFBQztZQUFPO1lBQVE7U0FBUTtJQUFDO0lBQ3BETixNQUFNO1FBQUVBLE1BQU1LO1FBQVFDLE1BQU07WUFBQztZQUFVO1lBQVE7WUFBVztZQUFXO1NBQVE7SUFBQztJQUM5RUMsUUFBUUM7SUFDUkMsTUFBTUo7QUFDUixHQUFHO0lBQUVLLFlBQVk7QUFBSztBQUVmLE1BQU1DLGNBQWNmLHdEQUFlLENBQUNlLFdBQVcsSUFBSWYscURBQWMsQ0FBQyxlQUFlRSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZ2h0YmFua2VyLXNlcnZlci8uL3NyYy9tb2RlbHMvVHJhbnNhY3Rpb24udHM/MjU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBUeFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBraWRJZDogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0tpZCcgfSxcbiAgamFyOiB7IHR5cGU6IFN0cmluZywgZW51bTogWydzYXZlJywnc3BlbmQnLCdzaGFyZSddIH0sXG4gIHR5cGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ2RlcG9zaXQnLCdzcGVuZCcsJ3RyYW5zZmVyJywnaW50ZXJlc3QnLCdtYXRjaCddIH0sXG4gIGFtb3VudDogTnVtYmVyLCAvLyBjZW50c1xuICBub3RlOiBTdHJpbmcsXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbiA9IG1vbmdvb3NlLm1vZGVscy5UcmFuc2FjdGlvbiB8fCBtb25nb29zZS5tb2RlbCgnVHJhbnNhY3Rpb24nLCBUeFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJUeFNjaGVtYSIsImtpZElkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJqYXIiLCJTdHJpbmciLCJlbnVtIiwiYW1vdW50IiwiTnVtYmVyIiwibm90ZSIsInRpbWVzdGFtcHMiLCJUcmFuc2FjdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Transaction.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: true,\n        index: true\n    },\n    passwordHash: String,\n    familyId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Family\"\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsUUFBUTtRQUFNQyxPQUFPO0lBQUs7SUFDakRDLGNBQWNIO0lBQ2RJLFVBQVU7UUFBRUwsTUFBTUgsNENBQU1BLENBQUNTLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO0lBQVM7QUFDekQsR0FBRztJQUFFQyxZQUFZO0FBQUs7QUFFZixNQUFNQyxPQUFPZCx3REFBZSxDQUFDYyxJQUFJLElBQUlkLHFEQUFjLENBQUMsUUFBUUUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWdodGJhbmtlci1zZXJ2ZXIvLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxuICBwYXNzd29yZEhhc2g6IFN0cmluZyxcbiAgZmFtaWx5SWQ6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdGYW1pbHknIH1cbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsImluZGV4IiwicGFzc3dvcmRIYXNoIiwiZmFtaWx5SWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/semver@7.7.3","vendor-chunks/jsonwebtoken@9.0.2","vendor-chunks/lodash.includes@4.3.0","vendor-chunks/jws@3.2.2","vendor-chunks/lodash.once@4.1.1","vendor-chunks/jwa@1.4.2","vendor-chunks/lodash.isinteger@4.0.4","vendor-chunks/ecdsa-sig-formatter@1.0.11","vendor-chunks/lodash.isplainobject@4.0.6","vendor-chunks/ms@2.1.3","vendor-chunks/lodash.isstring@4.0.1","vendor-chunks/lodash.isnumber@3.0.3","vendor-chunks/lodash.isboolean@3.0.3","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/buffer-equal-constant-time@1.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Froute&page=%2Fapi%2Ftransactions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();