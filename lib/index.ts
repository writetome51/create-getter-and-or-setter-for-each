// Use this method to create a bunch of properties of `obj` that need getter and/or setter
// functions that all do the same thing. It attaches the same getter function and
// setter function to each property.

export function createGetterAndOrSetterForEach(
	propertyNames: string[],
	configuration: GetterSetterConfiguration, // See interface below.
	obj
): void {

	propertyNames.forEach((propertyName, index, propertyNames) => {

		let propertyDefinition = {enumerable: true, configurable: true};

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


interface GetterSetterConfiguration {
	// get_setterFunction takes the property name as first argument and returns the setter
	// function.
	get_setterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => (value) => void;

	// get_getterFunction takes the property name as first argument and
	// returns the getter function.
	get_getterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => () => any;
}
