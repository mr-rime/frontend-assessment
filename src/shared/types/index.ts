
export type ConvertPropToString<T> = {
    [K in keyof T]: K
}[keyof T]

export type Paginated<T = unknown> = {
    currentPage: number;
    pageSize: number,
    totalItems: number,
    totalPages: number,
    items: T
}