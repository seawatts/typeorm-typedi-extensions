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
exports.EntityTypeMissingError = void 0;
var EntityTypeMissingError = /** @class */ (function (_super) {
    __extends(EntityTypeMissingError, _super);
    function EntityTypeMissingError(object, propertyName, index) {
        var _this = _super.call(this, "Missing \"entityType\" parameter of \"@InjectRepository\" decorator " +
            index !== undefined
            ? "for a \"" + propertyName + "\" method's " + (index + 1) + ". parameter of " + object.constructor.name + " class. "
            : "for a property \"" + propertyName + "\" of " + object.constructor.name + " class. "
                +
                    "For injecting Repository, MongoRepository or TreeRepository, " +
                "you have to specify the entity type due to TS reflection limitation - " +
                "\"entityType\" parameter can be ommited only for custom repositories.") || this;
        Object.setPrototypeOf(_this, EntityTypeMissingError.prototype);
        return _this;
    }
    return EntityTypeMissingError;
}(Error));
exports.EntityTypeMissingError = EntityTypeMissingError;
//# sourceMappingURL=EntityTypeMissingError.js.map