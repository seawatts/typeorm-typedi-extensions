"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamTypeMissingError = void 0;
var ParamTypeMissingError = /** @class */ (function (_super) {
    __extends(ParamTypeMissingError, _super);
    function ParamTypeMissingError(object, propertyName, index) {
        var _this = _super.call(this, "Cannot get reflected type for a \"" + propertyName + "\" method's " + (index + 1) + ". parameter of " + object.constructor.name + " class. " +
            "Make sure you have turned on an \"emitDecoratorMetadata\": true, option in tsconfig.json. " +
            "and that you have imported \"reflect-metadata\" on top of the main entry file in your application." +
            "And make sure that you have annotated the property type correctly with: " +
            "Repository, MongoRepository, TreeRepository or custom repository class type.") || this;
        Object.setPrototypeOf(_this, ParamTypeMissingError.prototype);
        return _this;
    }
    return ParamTypeMissingError;
}(Error));
exports.ParamTypeMissingError = ParamTypeMissingError;
//# sourceMappingURL=ParamTypeMissingError.js.map