"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConnection = void 0;
var typeorm_1 = require("typeorm");
var typedi_1 = require("typedi");
/**
 * Allows to inject an Connection using typedi's Container.
 */
function InjectConnection(connectionName) {
    if (connectionName === void 0) { connectionName = "default"; }
    return function (object, propertyName, index) {
        typedi_1.Container.registerHandler({ object: object, index: index, propertyName: propertyName, value: function (containerInstance) {
                var connectionManager = containerInstance.get(typeorm_1.ConnectionManager);
                if (!connectionManager.has(connectionName))
                    throw new Error("Cannot get connection \"" + connectionName + "\" from the connection manager. " +
                        "Make sure you have created such connection. Also make sure you have called useContainer(Container) " +
                        "in your application before you established a connection and importing any entity.");
                return connectionManager.get(connectionName);
            } });
    };
}
exports.InjectConnection = InjectConnection;
//# sourceMappingURL=InjectConnection.js.map