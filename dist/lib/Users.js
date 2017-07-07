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
var QueryString = require("querystring");
exports.Users = function (API_URL, makeRequest) {
    var objectEndpoint = 'users';
    return {
        isLoggegedId: function () { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + "/" + objectEndpoint + "/me";
                        return [4 /*yield*/, makeRequest({ method: 'POST', url: url })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); },
        /**
         * Create new user
         * @param options - options to create a user
         */
        createUser: function (options) { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + "/" + objectEndpoint;
                        return [4 /*yield*/, makeRequest({ method: 'POST', url: url, data: options })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); },
        /**
         * Delete existing user
         * @param userId - id of a user to be removed
         * @param options - options to delete a user
         * @default { force: true, reassign: true }
         */
        deleteUser: function (userId, options) {
            if (options === void 0) { options = { force: true, reassign: {} }; }
            return __awaiter(_this, void 0, void 0, function () {
                var url, response, deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_URL + "/" + objectEndpoint + "/" + userId;
                            return [4 /*yield*/, makeRequest({ method: 'DELETE', url: url, data: options })];
                        case 1:
                            response = _a.sent();
                            deleted = response.data.deleted;
                            return [2 /*return*/, deleted];
                    }
                });
            });
        },
        /**
         * get specific user
         * @param userId - id of a user to get
         */
        getUser: function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + "/" + objectEndpoint + "/" + userId;
                        return [4 /*yield*/, makeRequest({ method: 'GET', url: url })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); },
        /**
         * Get all posts
         * @param options - options to retrieve a posts
         */
        getUsers: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var url, queryString, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_URL + "/" + objectEndpoint + "}";
                            queryString = QueryString.stringify(options);
                            return [4 /*yield*/, makeRequest({ method: 'GET', url: url, data: options })];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.data];
                    }
                });
            });
        },
        /**
         * Update existing user
         * @param userId
         * @param options - options to update a user
         */
        updateUser: function (userId, options) { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + "/" + objectEndpoint + "/" + userId;
                        return [4 /*yield*/, makeRequest({ method: 'POST', url: url, data: options })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); },
    };
};
//# sourceMappingURL=Users.js.map