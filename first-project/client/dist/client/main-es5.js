(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <app-login-form></app-login-form>\n        <button class=\"btn btn-success\" type=\"submit\" routerLink=\"/pdf/upload\">\n            Załaduj plik\n          </button>\n          <button class=\"btn btn-success\" type=\"submit\" routerLink=\"/pdf/download\">\n              Pobierz plik\n            </button>\n    </nav>\n    <div>\n    </div>\n    <router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/download-file/download-file.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/download-file/download-file.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\" *ngIf=\"links; else loading\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Plik</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let x of links\">\n    <tr>\n      <td><button type=\"button\" fileSaver [method]=\"'GET'\" [fileName]=x [url]=x\n        [query]=\"{ pi: 1, name: 'demo' }\" >{{x}}</button>\n      </td>\n      </tr>\n  </tbody>\n</table>\n\n<ng-template #loading>\n  Loading stuff...\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div [hidden]=\"isLoggedIn\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#loginModal\">\n      Zaloguj się\n    </button>\n    <button class=\"btn btn-success\" type=\"submit\" routerLink=\"/user/signup\">\n      Zarejestruj się\n    </button>\n  </div>\n  <div [hidden]=\"!isLoggedIn\">\n    <span> Cześć, {{username}} </span>\n    <button class=\"btn btn-warning\" type=\"submit\" (click)=\"logout()\">Wyloguj się</button>\n  </div>\n  \n  \n  <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <div class=\"d-flex justify-content-center\">\n            <form class=\"form-inlin\" name=\"signin\" #signin=\"ngForm\">\n              <div class=\"form-group row\">\n                <input class=\"form-control col-md-12\" name=\"login\" type=\"login\" id=\"inputLogin\" placeholder=\"Login\"\n                  [(ngModel)]=\"model.username\" #login=\"ngModel\" required minlength=\"6\" maxlength=\"50\" required>\n              </div>\n              <div class=\"form-group row\">\n                <input class=\"form-control col-md-12\" name=\"mainPassword\" type=\"password\" id=\"inputMainPassword\"\n                  placeholder=\"Hasło\" [(ngModel)]=\"model.password\" #mainPassword=\"ngModel\" required minlength=\"8\"\n                  maxlength=\"80\" required>\n              </div>\n              <div class=\"form-group row\">\n                <button class=\"btn btn-success\" type=\"submit\" (click)=\"confirm()\"\n                  [disabled]=\"!signin.form.valid\">Zaloguj</button>\n                <button class=\"btn btn-failure\" type=\"submit\" data-dismiss=\"modal\">Anuluj</button>\n              </div>\n              <div [hidden]=\"!isLoginFailed\">\n                {{errorMessage}}\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-form/signup-form.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-form/signup-form.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n        <form [formGroup]=\"userForm\" #formDir=\"ngForm\">\n      \n             <div class=\"form-group\">\n      \n                <label for=\"username\">Nazwa użytkownika:</label>\n                <input id=\"username\" class=\"form-control\"\n                      formControlName=\"username\" required >\n      \n                <div *ngIf=\"username.invalid && username.touched\" \n                    class=\"alert alert-danger\">\n      \n                  <div *ngIf=\"username.errors.required\">\n                    Nazwa użytkownika jest wymagana.\n                  </div>\n                  <div *ngIf=\"username.errors.minlength\">\n                    Nazwa użytkownika musi mieć długość minimum 6 znaków.\n                  </div>           \n                  <div *ngIf=\"username.errors?.uniqueUserName\">\n                    Ta nazwa użykowanika jest zajęta.\n                  </div>\n                </div>\n              </div>\n      \n              <div class=\"form-group\">\n                <label for=\"password\">Hasło</label>\n                <input id=\"password\" class=\"form-control password\"\n                    formControlName=\"password\" type=\"password\" required >\n      \n                <div *ngIf=\"password.invalid && (password.touched || password.dirty)\" class=\"alert alert-danger alter-ego-errors\">\n                    <div *ngIf=\"password.errors.required\">\n                        Hasło jest wymagane.\n                       </div>\n                       <div *ngIf=\"password.errors.minlength\">\n                         Hasło musi mieć długość minimum 8 znaków.\n                       </div>       \n                </div>\n              </div>\n           \n            <div class=\"form-group\">\n              <label for=\"email\">Adres email</label>\n              <input id=\"email\" class=\"form-control\" type=\"email\"\n                  formControlName=\"email\" required >\n      \n              <div *ngIf=\"email.invalid && email.touched\" class=\"alert alert-danger\">\n                <div *ngIf=\"email.errors.required\">Email jest wymagany.</div>\n              </div>\n            </div>\n      \n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"confirm()\"\n                   [disabled]=\"userForm.invalid || username.pending\">Submit</button>  \n                   <div *ngIf=\"username.pending\">Trwa sprawdzanie nazwy użytkownika</div> \n        </form>\n      </div>\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"uploader\"/>\n \n  <div class=\"drop-box\" ng2FileDrop\n       [ngClass]=\"{'dragover': isDropOver}\"\n       [uploader]=\"uploader\"\n       (fileOver)=\"fileOverAnother($event)\"\n       (click)=\"fileClicked()\">\n    <span class=\"drag-in-title\">Import or drag file here</span>\n    <span class=\"drag-over-title\">Drop the file</span>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
            /* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/upload-file/upload-file.component.ts");
            /* harmony import */ var _download_file_download_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-file/download-file.component */ "./src/app/download-file/download-file.component.ts");
            var routes = [
                {
                    path: 'user/signup',
                    component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_3__["SignupFormComponent"],
                },
                {
                    path: 'pdf/upload',
                    component: _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__["UploadFileComponent"],
                },
                {
                    path: 'pdf/download',
                    component: _download_file_download_file_component__WEBPACK_IMPORTED_MODULE_5__["DownloadFileComponent"],
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'first-project';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _common_username_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/username-validator.directive */ "./src/app/common/username-validator.directive.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _common_AuthInterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/AuthInterceptor */ "./src/app/common/AuthInterceptor.ts");
            /* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/upload-file/upload-file.component.ts");
            /* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
            /* harmony import */ var _download_file_download_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./download-file/download-file.component */ "./src/app/download-file/download-file.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"],
                        _common_username_validator_directive__WEBPACK_IMPORTED_MODULE_1__["UniqueUsernameValidatorDirective"],
                        _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_11__["SignupFormComponent"],
                        _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_14__["UploadFileComponent"],
                        _download_file_download_file_component__WEBPACK_IMPORTED_MODULE_16__["DownloadFileComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                        ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                        ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__["FileSaverModule"]
                    ],
                    providers: [
                        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"],
                        _common_AuthInterceptor__WEBPACK_IMPORTED_MODULE_13__["httpInterceptorProviders"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/common/AuthInterceptor.ts": 
        /*!*******************************************!*\
          !*** ./src/app/common/AuthInterceptor.ts ***!
          \*******************************************/
        /*! exports provided: AuthInterceptor, httpInterceptorProviders */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () { return httpInterceptorProviders; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            var TOKEN_HEADER_KEY = 'Authorization';
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(tokenService) {
                    this.tokenService = tokenService;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var authReq = req;
                    var token = this.tokenService.getToken();
                    if (token != null) {
                        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
                    }
                    return next.handle(authReq);
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], AuthInterceptor);
            var httpInterceptorProviders = [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
            ];
            /***/ 
        }),
        /***/ "./src/app/common/JwtResponse.ts": 
        /*!***************************************!*\
          !*** ./src/app/common/JwtResponse.ts ***!
          \***************************************/
        /*! exports provided: JwtResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function () { return JwtResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var JwtResponse = /** @class */ (function () {
                function JwtResponse(token) {
                    this.token = token;
                }
                return JwtResponse;
            }());
            /***/ 
        }),
        /***/ "./src/app/common/LoginForm.ts": 
        /*!*************************************!*\
          !*** ./src/app/common/LoginForm.ts ***!
          \*************************************/
        /*! exports provided: LoginForm */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function () { return LoginForm; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoginForm = /** @class */ (function () {
                function LoginForm(username, password) {
                    this.username = username;
                    this.password = password;
                }
                return LoginForm;
            }());
            /***/ 
        }),
        /***/ "./src/app/common/username-validator.directive.ts": 
        /*!********************************************************!*\
          !*** ./src/app/common/username-validator.directive.ts ***!
          \********************************************************/
        /*! exports provided: UniqueUserNameValidator, UniqueUsernameValidatorDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUserNameValidator", function () { return UniqueUserNameValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUsernameValidatorDirective", function () { return UniqueUsernameValidatorDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UniqueUserNameValidator = /** @class */ (function () {
                function UniqueUserNameValidator(LoginService) {
                    this.LoginService = LoginService;
                }
                UniqueUserNameValidator.prototype.validate = function (ctrl) {
                    return this.LoginService.isNameTaken(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isTaken) { return (isTaken ? { uniqueUserName: true } : null); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return null; }));
                };
                return UniqueUserNameValidator;
            }());
            UniqueUserNameValidator.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
            ]; };
            UniqueUserNameValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], UniqueUserNameValidator);
            var UniqueUsernameValidatorDirective = /** @class */ (function () {
                function UniqueUsernameValidatorDirective(validator) {
                    this.validator = validator;
                }
                UniqueUsernameValidatorDirective.prototype.validate = function (control) {
                    this.validator.validate(control);
                };
                return UniqueUsernameValidatorDirective;
            }());
            UniqueUsernameValidatorDirective.ctorParameters = function () { return [
                { type: UniqueUserNameValidator }
            ]; };
            UniqueUsernameValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
                    selector: '[uniqueUserName]',
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return UniqueUserNameValidator; }),
                            multi: true
                        }
                    ]
                })
            ], UniqueUsernameValidatorDirective);
            /***/ 
        }),
        /***/ "./src/app/download-file/download-file.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/download-file/download-file.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkLWZpbGUvZG93bmxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/download-file/download-file.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/download-file/download-file.component.ts ***!
          \**********************************************************/
        /*! exports provided: DownloadFileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadFileComponent", function () { return DownloadFileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/pdf.service */ "./src/app/services/pdf.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var DownloadFileComponent = /** @class */ (function () {
                function DownloadFileComponent(pdfService, sanitizer) {
                    this.pdfService = pdfService;
                    this.sanitizer = sanitizer;
                }
                DownloadFileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.pdfService.getFilesLinks().subscribe(function (data) {
                        _this.links = data.filesLinks;
                        console.log(_this.links);
                    });
                };
                return DownloadFileComponent;
            }());
            DownloadFileComponent.ctorParameters = function () { return [
                { type: _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__["PdfService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
            ]; };
            DownloadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-download-file',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./download-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/download-file/download-file.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./download-file.component.scss */ "./src/app/download-file/download-file.component.scss")).default]
                })
            ], DownloadFileComponent);
            /***/ 
        }),
        /***/ "./src/app/login-form/login-form.component.sass": 
        /*!******************************************************!*\
          !*** ./src/app/login-form/login-form.component.sass ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/login-form/login-form.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/login-form/login-form.component.ts ***!
          \****************************************************/
        /*! exports provided: LoginFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () { return LoginFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _common_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LoginForm */ "./src/app/common/LoginForm.ts");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pdf.service */ "./src/app/services/pdf.service.ts");
            var LoginFormComponent = /** @class */ (function () {
                function LoginFormComponent(authService, pdf) {
                    this.authService = authService;
                    this.pdf = pdf;
                    this.model = {};
                    this.isLoggedIn = false;
                    this.isLoginFailed = false;
                    this.username = "";
                    this.errorMessage = '';
                }
                LoginFormComponent.prototype.ngOnInit = function () {
                    if (this.authService.isLogged()) {
                        this.isLoggedIn = true;
                        this.username = this.authService.getUsername();
                    }
                };
                LoginFormComponent.prototype.confirm = function () {
                    var _this = this;
                    console.log(this.model);
                    this.loginInfo = new _common_LoginForm__WEBPACK_IMPORTED_MODULE_2__["LoginForm"](this.model.username, this.model.password);
                    this.authService.login(this.loginInfo).subscribe(function (data) {
                        _this.authService.setCookies(data);
                        _this.isLoggedIn = true;
                        _this.isLoginFailed = false;
                        _this.reloadPage();
                    }, function (error) {
                        console.log(error);
                        _this.errorMessage = error.error.message;
                        _this.isLoginFailed = true;
                    });
                };
                LoginFormComponent.prototype.reloadPage = function () {
                    window.location.reload();
                };
                LoginFormComponent.prototype.logout = function () {
                    var _this = this;
                    this.authService.signOut().subscribe(function (data) {
                        _this.authService.deleteCookies();
                        window.location.reload();
                    }, function (error) {
                        console.log(error);
                        _this.authService.deleteCookies();
                        window.location.reload();
                    });
                };
                return LoginFormComponent;
            }());
            LoginFormComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _services_pdf_service__WEBPACK_IMPORTED_MODULE_4__["PdfService"] }
            ]; };
            LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.sass */ "./src/app/login-form/login-form.component.sass")).default]
                })
            ], LoginFormComponent);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _common_JwtResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/JwtResponse */ "./src/app/common/JwtResponse.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            var TOKEN_KEY = 'token';
            var USERNAME_KEY = 'username';
            var LoginService = /** @class */ (function () {
                function LoginService(http, cookieService) {
                    this.http = http;
                    this.cookieService = cookieService;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        })
                    };
                    this.url = "http://localhost:8080/api/auth";
                }
                LoginService.prototype.addNewUser = function (username, password, email) {
                    var user = {
                        username: username,
                        password: password,
                        email: email
                    };
                    return this.http.post(this.url + "/signup", user, this.httpOptions);
                };
                LoginService.prototype.isNameTaken = function (username) {
                    return this.http.get(this.url + "/checkUsername/" + username, this.httpOptions);
                };
                LoginService.prototype.login = function (loginInfo) {
                    return this.http.post(this.url + "/signin", loginInfo, this.httpOptions);
                };
                LoginService.prototype.isLogged = function () {
                    if (this.cookieService.get(TOKEN_KEY)) {
                        return true;
                    }
                    return false;
                };
                LoginService.prototype.setCookies = function (data) {
                    this.cookieService.set(TOKEN_KEY, data.token);
                    this.cookieService.set(USERNAME_KEY, data.username);
                };
                LoginService.prototype.getUsername = function () {
                    return this.cookieService.get(USERNAME_KEY);
                };
                LoginService.prototype.getToken = function () {
                    return this.cookieService.get(TOKEN_KEY);
                };
                LoginService.prototype.signOut = function () {
                    var jwt = new _common_JwtResponse__WEBPACK_IMPORTED_MODULE_3__["JwtResponse"](this.cookieService.get(TOKEN_KEY));
                    return this.http.post(this.url + "/logout", jwt, this.httpOptions);
                };
                LoginService.prototype.deleteCookies = function () {
                    this.cookieService.deleteAll();
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/pdf.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/pdf.service.ts ***!
          \*****************************************/
        /*! exports provided: PdfService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfService", function () { return PdfService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PdfService = /** @class */ (function () {
                function PdfService(http) {
                    this.http = http;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            'Access-Control-Allow-Origin': '*'
                        })
                    };
                    this.url = "http://localhost:8080/api/pdf";
                }
                PdfService.prototype.check = function () {
                    this.http.get(this.url + "/check", this.httpOptions).subscribe(function (data) { console.log(data.username); }, function (error) { console.log(error); });
                };
                PdfService.prototype.uploadFile = function (file) {
                    this.http.post(this.url + "/uploadFile", file, this.httpOptions).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
                };
                PdfService.prototype.getFilesLinks = function () {
                    return this.http.get(this.url + "/file", this.httpOptions);
                };
                PdfService.prototype.downloadFile = function (link) {
                    return this.http.get(link);
                };
                return PdfService;
            }());
            PdfService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            PdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], PdfService);
            /***/ 
        }),
        /***/ "./src/app/signup-form/signup-form.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/signup-form/signup-form.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/signup-form/signup-form.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/signup-form/signup-form.component.ts ***!
          \******************************************************/
        /*! exports provided: SignupFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function () { return SignupFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _common_username_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/username-validator.directive */ "./src/app/common/username-validator.directive.ts");
            var SignupFormComponent = /** @class */ (function () {
                function SignupFormComponent(loginService, userNameValidator) {
                    this.loginService = loginService;
                    this.userNameValidator = userNameValidator;
                    this.placeholder = { username: "", password: "", email: "" };
                }
                SignupFormComponent.prototype.ngOnInit = function () {
                    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.placeholder.username, {
                            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)],
                            asyncValidators: [this.userNameValidator.validate.bind(this.userNameValidator)],
                            updateOn: 'blur'
                        }),
                        'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.placeholder.password, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                        ]),
                        'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.placeholder.email, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        ]),
                    });
                };
                Object.defineProperty(SignupFormComponent.prototype, "username", {
                    get: function () { return this.userForm.get('username'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupFormComponent.prototype, "password", {
                    get: function () { return this.userForm.get('password'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupFormComponent.prototype, "email", {
                    get: function () { return this.userForm.get('email'); },
                    enumerable: true,
                    configurable: true
                });
                SignupFormComponent.prototype.confirm = function () {
                    this.loginService.addNewUser(this.username.value, this.password.value, this.email.value).subscribe(function (x) { return console.log(x); });
                };
                return SignupFormComponent;
            }());
            SignupFormComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _common_username_validator_directive__WEBPACK_IMPORTED_MODULE_4__["UniqueUserNameValidator"] }
            ]; };
            SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-form/signup-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-form.component.scss */ "./src/app/signup-form/signup-form.component.scss")).default]
                })
            ], SignupFormComponent);
            /***/ 
        }),
        /***/ "./src/app/upload-file/upload-file.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/upload-file/upload-file.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".drop-box {\n  cursor: pointer;\n  background: #F8F8F8;\n  border: 5px dashed #DDD;\n  text-align: center;\n  padding: 40px;\n}\n\n.drag-over-title {\n  display: none;\n}\n\n.drop-box.dragover {\n  opacity: 0.6;\n}\n\n.drop-box.dragover .drag-over-title {\n  display: block;\n}\n\n.drop-box.dragover .drag-in-title {\n  display: none;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyZWN6ZWsvU0VNRVNUUl9WL1BBTVcvZmlyc3QtcHJvamVjdC9jbGllbnQvc3JjL2FwcC91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC1ib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlcjogNXB4IGRhc2hlZCAjREREO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG4gXG4uZHJhZy1vdmVyLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiBcbi5kcm9wLWJveC5kcmFnb3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbiBcbi5kcm9wLWJveC5kcmFnb3ZlciAuZHJhZy1vdmVyLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4gXG4uZHJvcC1ib3guZHJhZ292ZXIgLmRyYWctaW4tdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIFxuaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iLCIuZHJvcC1ib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlcjogNXB4IGRhc2hlZCAjREREO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5kcmFnLW92ZXItdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcC1ib3guZHJhZ292ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5kcm9wLWJveC5kcmFnb3ZlciAuZHJhZy1vdmVyLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wLWJveC5kcmFnb3ZlciAuZHJhZy1pbi10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/upload-file/upload-file.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/upload-file/upload-file.component.ts ***!
          \******************************************************/
        /*! exports provided: UploadFileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () { return UploadFileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            var UploadFileComponent = /** @class */ (function () {
                function UploadFileComponent(tokenService) {
                    this.tokenService = tokenService;
                }
                UploadFileComponent.prototype.ngOnInit = function () {
                    var headers = [{ name: 'Accept', value: 'application/json' },
                        { name: "Authorization", value: 'Bearer ' + this.tokenService.getToken() }];
                    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: 'http://localhost:8080/api/pdf/uploadFile', autoUpload: true, headers: headers });
                };
                UploadFileComponent.prototype.fileOverAnother = function (e) {
                    this.isDropOver = e;
                };
                UploadFileComponent.prototype.fileClicked = function () {
                    this.fileInput.nativeElement.click();
                };
                return UploadFileComponent;
            }());
            UploadFileComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: false })
            ], UploadFileComponent.prototype, "fileInput", void 0);
            UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-upload-file',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/upload-file/upload-file.component.scss")).default]
                })
            ], UploadFileComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/areczek/SEMESTR_V/PAMW/first-project/client/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map