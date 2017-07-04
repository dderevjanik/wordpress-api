"use strict";
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
var authenicate = require("wordpress-jwt-auth");
var chalk_1 = require("chalk");
var QueryString = require("querystring");
var REST_API_PATH = '/wp-json/wp/v2';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @throws {BadHost}
 */
var connect = function (host) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var API_URL, e_1, msg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                API_URL = host + REST_API_PATH;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get(API_URL)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                msg = chalk_1.red('BadHost: no response from rest api endpoint ' + chalk_1.underline(API_URL));
                throw new Error(msg);
            case 4: return [2 /*return*/, {
                    /**
                     * Remove a post
                     * @param postId - post id to remove
                     * @param options - remove options
                     */
                    deletePost: function (postId, options) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, axios_1.default.delete(API_URL)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    /**
                     * Get specific post with id
                     * @param postId - post id
                     * @returns {Post} post with postId
                     */
                    getPost: function (postId) { return __awaiter(_this, void 0, void 0, function () {
                        var url, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = "http://" + API_URL + "/posts/" + postId;
                                    return [4 /*yield*/, axios_1.default.get(API_URL + "/posts/" + postId)];
                                case 1:
                                    response = _a.sent();
                                    return [2 /*return*/, response.data];
                            }
                        });
                    }); },
                    /**
                     * Get all posts
                     * @param options - options to retrieve a posts
                     * @returns {Post[]} array of Posts
                     */
                    getPosts: function (options) { return __awaiter(_this, void 0, void 0, function () {
                        var queryString, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    queryString = QueryString.stringify(options);
                                    return [4 /*yield*/, axios_1.default.get(API_URL + "'/posts?'" + queryString)];
                                case 1:
                                    response = _a.sent();
                                    return [2 /*return*/, response.data];
                            }
                        });
                    }); },
                    /**
                     * Update a specific post
                     * @param postId - which post to update
                     * @param options - options to update a post
                     */
                    updatePost: function (postId, options) { return __awaiter(_this, void 0, void 0, function () {
                        var queryString, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    queryString = QueryString.stringify(options);
                                    return [4 /*yield*/, axios_1.default.put(API_URL + "/posts?" + queryString)];
                                case 1:
                                    response = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    /**
                     * Create new user
                     * @param options - options to create a user
                     */
                    registerUser: function (options) { return __awaiter(_this, void 0, void 0, function () {
                        var conn, token, authHeader, val, queryString, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, authenicate.connect('http://localhost:8080/wordpress')];
                                case 1:
                                    conn = _a.sent();
                                    console.log('http://localhost:8080/wordpress');
                                    return [4 /*yield*/, conn.generateToken('root', 'rootS1237984aaa4d')];
                                case 2:
                                    token = _a.sent();
                                    authHeader = { headers: { Authorization: "Bearer " + token.token } };
                                    return [4 /*yield*/, conn.validateToken(token.token)];
                                case 3:
                                    val = _a.sent();
                                    queryString = QueryString.stringify(options);
                                    console.log(API_URL + "/users?" + queryString);
                                    return [4 /*yield*/, axios_1.default.post(API_URL + "/users?" + queryString, {}, authHeader)];
                                case 4:
                                    response = _a.sent();
                                    return [2 /*return*/, response];
                            }
                        });
                    }); }
                }];
        }
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var wpaApi, newUser, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connect('http://localhost:8080/wordpress')];
            case 1:
                wpaApi = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, wpaApi.registerUser({
                        email: 'newEmail3@gmail.com',
                        password: 'pass',
                        username: 'user3'
                    })];
            case 3:
                newUser = _a.sent();
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 5];
            case 5:
                console.log(newUser);
                process.exit();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=Index.js.map