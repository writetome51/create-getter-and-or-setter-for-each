export declare function createGetterAndOrSetterForEach(obj: any, propertyNames: string[], configuration: GetterSetterConfiguration): void;

export interface GetterSetterConfiguration {
    get_setterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => (value: any) => void;
    get_getterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => () => any;
}
