/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    ApiUrl: ComponentFramework.PropertyTypes.StringProperty;
    theme: ComponentFramework.PropertyTypes.EnumProperty<"ag-theme-quartz" | "ag-theme-quartz-dark" | "ag-theme-alpine" | "ag-theme-alpine-dark" | "ag-theme-material" | "ag-theme-material-dark" | "ag-theme-balham" | "ag-theme-balham-dark">;
    data: ComponentFramework.PropertyTypes.Property;
    columnDefs: ComponentFramework.PropertyTypes.Property;
    enableRowGroupColumns: ComponentFramework.PropertyTypes.StringProperty;
    pivotColumns: ComponentFramework.PropertyTypes.StringProperty;
    aggFuncColumns: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    ApiUrl?: string;
    theme?: string;
    data?: any;
    columnDefs?: any;
    enableRowGroupColumns?: string;
    pivotColumns?: string;
    aggFuncColumns?: string;
}
