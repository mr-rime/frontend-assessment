import { Pagination } from "@/shared/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "../queries/products.queries";
import { Product } from "./product";
import { ProductSkeleton } from "./product-skeleton";
import { getRouteApi } from "@tanstack/react-router";
import { ProductsFilter } from "./products-filter";

const pageSize = 12;
const routeApi = getRouteApi('/(store)/_store-layout/')

export function ProductsGrid() {
    const navigate = routeApi.useNavigate();
    const { page = 1, sortBy = 'name', order = 'asc', category = [], q = '' } = routeApi.useSearch();

    const currentPage = Number(page) || 1;

    const { data, isLoading } = useQuery(
        getProductsQueryOptions({
            currentPage,
            pageSize,
            sortBy,
            order,
            category,
            q,
        })
    );

    const totalPages = data?.totalPages ?? 1;

    const handlePageChange = (nextPage: number) => {
        navigate({
            search: {
                page: nextPage,
                sortBy,
                order,
                category,
                q,
            },
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground hidden sm:block"><span>{data?.items.length}</span> <span>products</span></p>
                <ProductsFilter />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading && Array.from({ length: pageSize }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}

                {data?.items.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}