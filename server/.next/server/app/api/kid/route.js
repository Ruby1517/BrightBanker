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
exports.id = "app/api/kid/route";
exports.ids = ["app/api/kid/route"];
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

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkid%2Froute&page=%2Fapi%2Fkid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkid%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkid%2Froute&page=%2Fapi%2Fkid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkid%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_BrightBanker_server_src_app_api_kid_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/kid/route.ts */ \"(rsc)/./src/app/api/kid/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/kid/route\",\n        pathname: \"/api/kid\",\n        filename: \"route\",\n        bundlePath: \"app/api/kid/route\"\n    },\n    resolvedPagePath: \"D:\\\\BrightBanker\\\\server\\\\src\\\\app\\\\api\\\\kid\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_BrightBanker_server_src_app_api_kid_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/kid/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjVfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZraWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmtpZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmtpZCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDQnJpZ2h0QmFua2VyJTVDc2VydmVyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQnJpZ2h0QmFua2VyJTVDc2VydmVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNNO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZ2h0YmFua2VyLXNlcnZlci8/YTA4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxCcmlnaHRCYW5rZXJcXFxcc2VydmVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGtpZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkva2lkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkva2lkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9raWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxCcmlnaHRCYW5rZXJcXFxcc2VydmVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGtpZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkva2lkL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkid%2Froute&page=%2Fapi%2Fkid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkid%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/kid/route.ts":
/*!**********************************!*\
  !*** ./src/app/api/kid/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _src_lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _src_models_Kid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/models/Kid */ \"(rsc)/./src/models/Kid.ts\");\n\n\n\nasync function GET(req) {\n    try {\n        const user = await (0,_src_lib_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)(req);\n        const kids = await _src_models_Kid__WEBPACK_IMPORTED_MODULE_2__.Kid.find({\n            familyId: user.familyId\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            kids\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e.message\n        }, {\n            status: 401\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const user = await (0,_src_lib_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)(req);\n        const body = await req.json();\n        const kid = await _src_models_Kid__WEBPACK_IMPORTED_MODULE_2__.Kid.create({\n            familyId: user.familyId,\n            name: body.name,\n            age: body.age\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            kid\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9raWQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFDWDtBQUNOO0FBRWhDLGVBQWVHLElBQUlDLEdBQWdCO0lBQ3hDLElBQUc7UUFDRCxNQUFNQyxPQUFPLE1BQU1KLDBEQUFXQSxDQUFDRztRQUMvQixNQUFNRSxPQUFPLE1BQU1KLGdEQUFHQSxDQUFDSyxJQUFJLENBQUM7WUFBRUMsVUFBVUgsS0FBS0csUUFBUTtRQUFDO1FBQ3RELE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUg7UUFBSztJQUNsQyxFQUFDLE9BQU1JLEdBQU07UUFDWCxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVFLE9BQU9ELEVBQUVFLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRDtBQUNGO0FBRU8sZUFBZUMsS0FBS1YsR0FBZ0I7SUFDekMsSUFBRztRQUNELE1BQU1DLE9BQU8sTUFBTUosMERBQVdBLENBQUNHO1FBQy9CLE1BQU1XLE9BQU8sTUFBTVgsSUFBSUssSUFBSTtRQUMzQixNQUFNTyxNQUFNLE1BQU1kLGdEQUFHQSxDQUFDZSxNQUFNLENBQUM7WUFBRVQsVUFBVUgsS0FBS0csUUFBUTtZQUFFVSxNQUFNSCxLQUFLRyxJQUFJO1lBQUVDLEtBQUtKLEtBQUtJLEdBQUc7UUFBQztRQUN2RixPQUFPbkIscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFTztRQUFJO0lBQ2pDLEVBQUMsT0FBTU4sR0FBTTtRQUNYLE9BQU9WLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUUsT0FBT0QsRUFBRUUsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmlnaHRiYW5rZXItc2VydmVyLy4vc3JjL2FwcC9hcGkva2lkL3JvdXRlLnRzP2UxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHJlcXVpcmVBdXRoIH0gZnJvbSAnQC9zcmMvbGliL2F1dGgnO1xuaW1wb3J0IHsgS2lkIH0gZnJvbSAnQC9zcmMvbW9kZWxzL0tpZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCl7XG4gIHRyeXtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWlyZUF1dGgocmVxKTtcbiAgICBjb25zdCBraWRzID0gYXdhaXQgS2lkLmZpbmQoeyBmYW1pbHlJZDogdXNlci5mYW1pbHlJZCB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBraWRzIH0pO1xuICB9Y2F0Y2goZTphbnkpe1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KXtcbiAgdHJ5e1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXF1aXJlQXV0aChyZXEpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IGtpZCA9IGF3YWl0IEtpZC5jcmVhdGUoeyBmYW1pbHlJZDogdXNlci5mYW1pbHlJZCwgbmFtZTogYm9keS5uYW1lLCBhZ2U6IGJvZHkuYWdlIH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGtpZCB9KTtcbiAgfWNhdGNoKGU6YW55KXtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJyZXF1aXJlQXV0aCIsIktpZCIsIkdFVCIsInJlcSIsInVzZXIiLCJraWRzIiwiZmluZCIsImZhbWlseUlkIiwianNvbiIsImUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQT1NUIiwiYm9keSIsImtpZCIsImNyZWF0ZSIsIm5hbWUiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/kid/route.ts\n");

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

/***/ "(rsc)/./src/models/Kid.ts":
/*!***************************!*\
  !*** ./src/models/Kid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Kid: () => (/* binding */ Kid)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KidSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    familyId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Family\"\n    },\n    name: String,\n    age: Number,\n    jars: {\n        save: {\n            type: Number,\n            default: 0\n        },\n        spend: {\n            type: Number,\n            default: 0\n        },\n        share: {\n            type: Number,\n            default: 0\n        }\n    }\n}, {\n    timestamps: true\n});\nconst Kid = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Kid || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Kid\", KidSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0tpZC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFNUMsTUFBTUUsWUFBWSxJQUFJRCw0Q0FBTUEsQ0FBQztJQUMzQkUsVUFBVTtRQUFFQyxNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7SUFBUztJQUN2REMsTUFBTUM7SUFDTkMsS0FBS0M7SUFDTEMsTUFBTTtRQUNKQyxNQUFNO1lBQUVULE1BQU1PO1lBQVFHLFNBQVM7UUFBRTtRQUNqQ0MsT0FBTztZQUFFWCxNQUFNTztZQUFRRyxTQUFTO1FBQUU7UUFDbENFLE9BQU87WUFBRVosTUFBTU87WUFBUUcsU0FBUztRQUFFO0lBQ3BDO0FBQ0YsR0FBRztJQUFFRyxZQUFZO0FBQUs7QUFFZixNQUFNQyxNQUFNbEIsd0RBQWUsQ0FBQ2tCLEdBQUcsSUFBSWxCLHFEQUFjLENBQUMsT0FBT0UsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWdodGJhbmtlci1zZXJ2ZXIvLi9zcmMvbW9kZWxzL0tpZC50cz82MTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IEtpZFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBmYW1pbHlJZDogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0ZhbWlseScgfSxcbiAgbmFtZTogU3RyaW5nLFxuICBhZ2U6IE51bWJlcixcbiAgamFyczoge1xuICAgIHNhdmU6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgc3BlbmQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgc2hhcmU6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gIH1cbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuZXhwb3J0IGNvbnN0IEtpZCA9IG1vbmdvb3NlLm1vZGVscy5LaWQgfHwgbW9uZ29vc2UubW9kZWwoJ0tpZCcsIEtpZFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJLaWRTY2hlbWEiLCJmYW1pbHlJZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibmFtZSIsIlN0cmluZyIsImFnZSIsIk51bWJlciIsImphcnMiLCJzYXZlIiwiZGVmYXVsdCIsInNwZW5kIiwic2hhcmUiLCJ0aW1lc3RhbXBzIiwiS2lkIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Kid.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/semver@7.7.3","vendor-chunks/jsonwebtoken@9.0.2","vendor-chunks/lodash.includes@4.3.0","vendor-chunks/jws@3.2.2","vendor-chunks/lodash.once@4.1.1","vendor-chunks/jwa@1.4.2","vendor-chunks/lodash.isinteger@4.0.4","vendor-chunks/ecdsa-sig-formatter@1.0.11","vendor-chunks/lodash.isplainobject@4.0.6","vendor-chunks/ms@2.1.3","vendor-chunks/lodash.isstring@4.0.1","vendor-chunks/lodash.isnumber@3.0.3","vendor-chunks/lodash.isboolean@3.0.3","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/buffer-equal-constant-time@1.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkid%2Froute&page=%2Fapi%2Fkid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkid%2Froute.ts&appDir=D%3A%5CBrightBanker%5Cserver%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBrightBanker%5Cserver&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();