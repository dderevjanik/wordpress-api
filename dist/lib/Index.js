"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var chalk_1 = require("chalk");
var wordpress_jwt_auth_1 = require("wordpress-jwt-auth"); // DEV
var Categories_1 = require("./Categories");
var Comments_1 = require("./Comments");
var Media_1 = require("./Media");
var Pages_1 = require("./Pages");
var PostRevisions_1 = require("./PostRevisions");
var Posts_1 = require("./Posts");
var PostStatuses_1 = require("./PostStatuses");
var PostTypes_1 = require("./PostTypes");
var Settings_1 = require("./Settings");
var Tags_1 = require("./Tags");
var Taxaomies_1 = require("./Taxaomies");
var Users_1 = require("./Users");
var REST_API_PATH = '/wp-json/wp/v2';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
exports.connect = function (host, hooks) {
    if (hooks === void 0) { hooks = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        var API_URL, beforeRequest, afterResponse, hookedRequest, makeRequest, e_1, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API_URL = host + REST_API_PATH;
                    hooks = { afterResponse: undefined, beforeRequest: undefined };
                    beforeRequest = hooks.beforeRequest, afterResponse = hooks.afterResponse;
                    hookedRequest = beforeRequest
                        ? function (requestConfig) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, axios_1.default(beforeRequest(requestConfig))];
                        }); }); }
                        : axios_1.default;
                    makeRequest = afterResponse
                        ? function (requestConfig) { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = afterResponse;
                                    return [4 /*yield*/, hookedRequest(requestConfig)];
                                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                            }
                        }); }); }
                        : hookedRequest;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, makeRequest({ method: 'GET', url: API_URL })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    msg = chalk_1.red('BadHost: no response from REST API endpoint ' + chalk_1.underline(API_URL));
                    throw new Error(msg);
                case 4: return [2 /*return*/, {
                        /**
                         * define all methods with categories
                         * http://demo.wp-api.org/wp-json/wp/v2/categories
                         */
                        categories: Categories_1.Categories(API_URL, makeRequest),
                        /**
                         * define all methods with wp comments
                         * http://demo.wp-api.org/wp-json/wp/v2/comments
                         */
                        comments: Comments_1.Comments(API_URL, makeRequest),
                        /**
                         * define all methods with wp media
                         * http://demo.wp-api.org/wp-json/wp/v2/media
                         */
                        media: Media_1.Media(API_URL, makeRequest),
                        /**
                         * define all methods with wp pages
                         * http://demo.wp-api.org/wp-json/wp/v2/pages
                         */
                        pages: Pages_1.Pages(API_URL, makeRequest),
                        /**
                         * define all methods with post revisions
                         * http://demo.wp-api.org/wp-json/wp/v2/posts/<parent_id>/revisions
                         */
                        postRevisions: PostRevisions_1.PostRevisions(API_URL, makeRequest),
                        /**
                         * define all methods with wp post statuses
                         * http://demo.wp-api.org/wp-json/wp/v2/statuses
                         */
                        postStatuses: PostStatuses_1.PostStatuses(API_URL, makeRequest),
                        /**
                         * define all methods with wp post type
                         * http://demo.wp-api.org/wp-json/wp/v2/media
                         */
                        postTypes: PostTypes_1.PostTypes(API_URL, makeRequest),
                        /**
                         * define all methods with wp posts
                         * http://demo.wp-api.org/wp-json/wp/v2/posts
                         */
                        posts: Posts_1.Posts(API_URL, makeRequest),
                        /**
                         * define all methods with wp settings
                         * specific settings for authenticated user
                         * http://demo.wp-api.org/wp-json/wp/v2/settings
                         */
                        settings: Settings_1.Settings(API_URL, makeRequest),
                        /**
                         * define all methods with wp tags
                         * http://demo.wp-api.org/wp-json/wp/v2/tags
                         */
                        tags: Tags_1.Tags(API_URL, makeRequest),
                        /**
                         * define all methods with wp taxaomies
                         * http://demo.wp-api.org/wp-json/wp/v2/taxaomies
                         */
                        taxanomies: Taxaomies_1.Taxanomies(API_URL, makeRequest),
                        /**
                         * define all methods with wp users
                         * http://demo.wp-api.org/wp-json/wp/v2/users
                         */
                        users: Users_1.Users(API_URL, makeRequest),
                    }];
            }
        });
    });
};
(function () { return __awaiter(_this, void 0, void 0, function () {
    var URL, token, authorization, wpaApi, comment, tag, page, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                URL = 'http://localhost:8080/wordpress';
                return [4 /*yield*/, wordpress_jwt_auth_1.generateToken(URL, 'root', 'root')];
            case 1:
                token = (_a.sent()).token;
                authorization = "Bearer " + token;
                return [4 /*yield*/, exports.connect(URL, {
                        beforeRequest: function (r) { return (__assign({}, r, { headers: __assign({}, r.headers, { Authorization: authorization }) })); },
                    })];
            case 2:
                wpaApi = _a.sent();
                console.log(token);
                _a.label = 3;
            case 3:
                _a.trys.push([3, 7, , 8]);
                return [4 /*yield*/, wpaApi.comments.createComment({ content: 'content', post: 1 })];
            case 4:
                comment = _a.sent();
                console.log(comment);
                return [4 /*yield*/, wpaApi.tags.createTag({ name: 'tag' })];
            case 5:
                tag = _a.sent();
                console.log(tag);
                return [4 /*yield*/, wpaApi.pages.createPage({ content: 'content' })];
            case 6:
                page = _a.sent();
                console.log(page.id);
                return [3 /*break*/, 8];
            case 7:
                e_2 = _a.sent();
                console.log('err');
                console.log(e_2);
                return [3 /*break*/, 8];
            case 8:
                process.exit();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=Index.js.map