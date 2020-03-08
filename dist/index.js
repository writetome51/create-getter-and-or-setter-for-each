"use strict";
// Use this method to create a bunch of properties of `obj` that need getter and/or setter
// functions that all do the same thing. It attaches the same getter function and
// setter function to each property.
Object.defineProperty(exports, "__esModule", { value: true });
function createGetterAndOrSetterForEach(propertyNames, configuration, // See interface below.
obj) {
    propertyNames.forEach((propertyName, index, propertyNames) => {
        let propertyDefinition = { enumerable: true, configurable: true };
        if (configuration.get_getterFunction) {
            propertyDefinition['get'] =
                configuration.get_getterFunction(propertyName, index, propertyNames);
        }
        if (configuration.get_setterFunction) {
            propertyDefinition['set'] =
                configuration.get_setterFunction(propertyName, index, propertyNames);
        }
        Object.defineProperty(obj, propertyName, propertyDefinition);
    });
}
exports.createGetterAndOrSetterForEach = createGetterAndOrSetterForEach;
