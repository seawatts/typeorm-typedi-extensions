"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./decorators/InjectConnection"), exports);
__exportStar(require("./decorators/InjectManager"), exports);
__exportStar(require("./decorators/InjectRepository"), exports);
// deprecated aliases
var InjectConnection_1 = require("./decorators/InjectConnection");
Object.defineProperty(exports, "OrmConnection", { enumerable: true, get: function () { return InjectConnection_1.InjectConnection; } });
var InjectManager_1 = require("./decorators/InjectManager");
Object.defineProperty(exports, "OrmManager", { enumerable: true, get: function () { return InjectManager_1.InjectManager; } });
var InjectRepository_1 = require("./decorators/InjectRepository");
Object.defineProperty(exports, "OrmRepository", { enumerable: true, get: function () { return InjectRepository_1.InjectRepository; } });
//# sourceMappingURL=index.js.map