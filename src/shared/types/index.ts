
export type ConvertPropToString<T> = {
    [K in keyof T]: K
}[keyof T]