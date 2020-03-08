"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let obj = { __greeting: 'hello', __age: 0 };
index_1.createGetterAndOrSetterForEach(['greeting', 'age'], {
    get_getterFunction: function (propertyName) {
        return function () {
            return this[`__${propertyName}`];
        };
    },
    get_setterFunction: function (propertyName) {
        return function (value) {
            value += ', sir.';
            this[`__${propertyName}`] = value;
        };
    }
}, obj);
console.log(obj.greeting); // 'hello'
console.log(obj.age); // '0'
obj.greeting = 'How are you';
obj.age = 1000;
console.log(obj.greeting); // 'How are you, sir.'
console.log(obj.age); // '1000, sir.'
obj = { __greeting: 'hello', __age: 0 };
index_1.createGetterAndOrSetterForEach(['greeting', 'age'], {
    get_getterFunction: function (propertyName) {
        return function () {
            return this[`__${propertyName}`] + ', sir.';
        };
    }
}, obj);
console.log(obj.greeting); // 'hello, sir.'
console.log(obj.age); // '0, sir.'
obj.age = 1; // triggers error, because age is read-only now.
