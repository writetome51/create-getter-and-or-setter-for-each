# createGetterAndOrSetterForEach(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;propertyNames: string[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;configuration: GetterSetterConfiguration<br>): void

Creates a bunch of properties of `obj` that need getter and/or setter
functions that all do the same thing. It attaches the same getter function and/or
setter function to each property. 


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


```

```


## Installation
`npm i  @writetome51/create-getter-and-or-setter-for-each`


## Loading
```
// If using TypeScript:
import { BaseClass } from '@writetome51/create-getter-and-or-setter-for-each';
// If using ES5 JavaScript:
var BaseClass = 
	require('@writetome51/create-getter-and-or-setter-for-each').createGetterAndOrSetterForEach;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
