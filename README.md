# createGetterAndOrSetterForEach(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;propertyNames: string[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: GetterSetterConfiguration,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object<br>): void

Creates a bunch of properties of `object` that need getter and/or setter functions  
that all do the same thing. It attaches the same getter function and/or setter  
function to each property in `propertyNames`. 


## GetterSetterConfiguration:  {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => (value) => void,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => () => any
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.
}

## Examples
```ts
let obj = {__greeting: 'hello', __age: 0};

createGetterAndOrSetterForEach(
	['greeting', 'age'],

	{
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
	},

	obj
);

console.log(obj.greeting); // 'hello'
console.log(obj.age); // '0'
obj.greeting = 'How are you';
obj.age = 1000;
console.log(obj.greeting); // 'How are you, sir.'
console.log(obj.age); // '1000, sir.'


obj = {__greeting: 'hello', __age: 0};

createGetterAndOrSetterForEach(
	['greeting', 'age'],

	{
		get_getterFunction: function (propertyName) {
			return function () {
				return this[`__${propertyName}`] + ', sir.';
			};
		}
	},

	obj
);

console.log(obj.greeting); // 'hello, sir.'
console.log(obj.age); // '0, sir.'

obj.age = 1; // triggers error, because age is read-only now.
```


## Installation
`npm i  @writetome51/create-getter-and-or-setter-for-each`


## Loading
```ts
// If using TypeScript:
import { createGetterAndOrSetterForEach } 
    from '@writetome51/create-getter-and-or-setter-for-each';
// If using ES5 JavaScript:
var createGetterAndOrSetterForEach = 
    require('@writetome51/create-getter-and-or-setter-for-each')
    .createGetterAndOrSetterForEach;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
