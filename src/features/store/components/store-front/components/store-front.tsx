import { ProductsCategoryFilter } from "./products-category-filter";
import { ProductsGrid } from "./products-grid";

export function StoreFront() {
    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 md:mt-0">
                <ProductsCategoryFilter />

                <div className="lg:col-span-3">
                    <ProductsGrid />
                </div>
            </div>
        </div>
    )
}
