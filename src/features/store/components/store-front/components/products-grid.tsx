import { Pagination } from "@/shared/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "../queries/products.queries";
import { Product } from "./product";
import { useNavigate, useSearch } from "@tanstack/react-router";

const pageSize = 12;

export function ProductsGrid() {
    const navigate = useNavigate({ from: "/" });

    const { page = 1 } = useSearch({
        from: "/(store)/_store-layout/",
    });

    const currentPage = Number(page) || 1;

    const { data, isLoading } = useQuery(
        getProductsQueryOptions({
            currentPage,
            pageSize,
        })
    );

    const totalPages = data?.totalPages ?? 1;

    const handlePageChange = (nextPage: number) => {
        navigate({
            search: {
                page: nextPage,
            },
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground"><span>{data?.items.length}</span> <span>products</span></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading && <p>Loading...</p>}

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