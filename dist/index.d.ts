export declare function createGetterAndOrSetterForEach(
	propertyNames: string[],
	configuration: GetterSetterConfiguration,
	obj: any
): void;


export interface GetterSetterConfiguration {

	get_setterFunction?: (
		propertyName: string,
		index?: number,
		propertyNames?: string[]
	) => (value: any) => void;

	get_getterFunction?: (
		propertyName: string,
		index?: number,
		propertyNames?: string[]
	) => () => any;

}
