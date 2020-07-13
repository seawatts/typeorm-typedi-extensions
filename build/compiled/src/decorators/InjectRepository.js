"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectRepository = void 0;
var typeorm_1 = require("typeorm");
var typedi_1 = require("typedi");
var EntityTypeMissingError_1 = require("../errors/EntityTypeMissingError");
var PropertyTypeMissingError_1 = require("../errors/PropertyTypeMissingError");
var ParamTypeMissingError_1 = require("../errors/ParamTypeMissingError");
/**
 * Helper to avoid V8 compilation of anonymous function on each call of decorator.
 */
function getRepository(connectionName, repositoryType, entityType, containerInstance) {
    var connectionManager = containerInstance.get(typeorm_1.ConnectionManager);
    if (!connectionManager.has(connectionName)) {
        throw new Error("Cannot get connection \"" + connectionName + "\" from the connection manager. " +
            "Make sure you have created such connection. Also make sure you have called useContainer(Container) " +
            "in your application before you established a connection and importing any entity.");
    }
    var connection = connectionManager.get(connectionName);
    switch (repositoryType) {
        case typeorm_1.Repository:
            return connection.getRepository(entityType);
        case typeorm_1.MongoRepository:
            return connection.getMongoRepository(entityType);
        case typeorm_1.TreeRepository:
            return connection.getTreeRepository(entityType);
        // if not the TypeORM's ones, there must be custom repository classes
        default:
            return connection.getCustomRepository(repositoryType);
    }
}
function InjectRepository(entityTypeOrConnectionName, paramConnectionName) {
    if (paramConnectionName === void 0) { paramConnectionName = "default"; }
    return function (object, propertyName, index) {
        var entityType;
        var connectionName;
        var repositoryType;
        // handle first parameter overload
        connectionName = paramConnectionName;
        if (typeof entityTypeOrConnectionName === "string") {
            connectionName = entityTypeOrConnectionName;
        }
        else if (typeof entityTypeOrConnectionName === "function") {
            entityType = entityTypeOrConnectionName;
        }
        // if the decorator has been aplied to parameter (constructor injection)
        if (index !== undefined) {
            var paramTypes = Reflect.getOwnMetadata("design:paramtypes", object, propertyName);
            if (!paramTypes || !paramTypes[index]) {
                throw new ParamTypeMissingError_1.ParamTypeMissingError(object, propertyName, index);
            }
            repositoryType = paramTypes[index];
        }
        // if the parameter has been aplied to class property
        else {
            var propertyType = Reflect.getOwnMetadata("design:type", object, propertyName);
            if (!propertyType) {
                throw new PropertyTypeMissingError_1.PropertyTypeMissingError(object, propertyName);
            }
            repositoryType = propertyType;
        }
        switch (repositoryType) {
            case typeorm_1.Repository:
            case typeorm_1.MongoRepository:
            case typeorm_1.TreeRepository:
                if (!entityType) {
                    throw new EntityTypeMissingError_1.EntityTypeMissingError(object, propertyName, index);
                }
        }
        typedi_1.Container.registerHandler({
            index: index,
            object: object,
            propertyName: propertyName,
            value: function (containerInstance) { return getRepository(connectionName, repositoryType, entityType, containerInstance); },
        });
    };
}
exports.InjectRepository = InjectRepository;
//# sourceMappingURL=InjectRepository.js.map