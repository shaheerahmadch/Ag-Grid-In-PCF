/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    ApiUrl: ComponentFramework.PropertyTypes.StringProperty;
    theme: ComponentFramework.PropertyTypes.EnumProperty<"ag-theme-quartz" | "ag-theme-quartz-dark" | "ag-theme-alpine" | "ag-theme-alpine-dark">;
    data: ComponentFramework.PropertyTypes.Property;
    enableRowGroupColumns: ComponentFramework.PropertyTypes.StringProperty;
    pivotColumns: ComponentFramework.PropertyTypes.StringProperty;
    aggFuncColumns: ComponentFramework.PropertyTypes.StringProperty;
    records: ComponentFramework.PropertyTypes.DataSet;
}
export interface IOutputs {
    ApiUrl?: string;
    theme?: string;
    data?: any;
    enableRowGroupColumns?: string;
    pivotColumns?: string;
    aggFuncColumns?: string;
}
