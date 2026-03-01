import { Button } from "@/shared/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import { ShoppingCart } from "lucide-react";
import { Link, useParams } from "@tanstack/react-router";
import { formatNumberToUSD } from "@/shared/lib/format-number-to-usd";
import { ProductPageSkeleton } from "./product-page-skeleton";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { getProductQueryOptions } from "../queries/product.queries";
import { useCartStore } from "@/features/store/components/cart/store";
import type { Customer } from "@/features/admin/components/customers/schemas";

export function ProductPage() {
    const { productId } = useParams({ from: "/(store)/_store-layout/product/$productId/" });
    const { data: product, isLoading } = useQuery(getProductQueryOptions(productId));
    const addToCart = useCartStore((state) => state.addToCart);

    const customer: Customer | undefined = undefined;

    if (isLoading) {
        return <ProductPageSkeleton />;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-16 space-y-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/" search={{ page: 1, sortBy: 'name', order: 'asc' }}>Products</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="lg:sticky lg:top-20 lg:self-start">
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group max-w-xl mx-auto lg:mx-0">
                            <Image
                                src={product.image || ""}
                                layout="constrained"
                                alt="product image"
                                width={500}
                                height={500}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-2xl font-bold mt-2">{formatNumberToUSD(product.price)}</p>
                    </div>
                    <div className="max-w-none">
                        {product.description}
                    </div>
                    <div className="text-sm">
                        {
                            product.stock > 0 ? (
                                <div className="text-green-600 font-medium">
                                    In Stock
                                </div>
                            ) : (
                                <div className="text-red-600 font-medium">
                                    Out of Stock
                                </div>
                            )
                        }
                    </div>
                    <div className="pt-4">
                        {
                            product.stock > 0 ? (
                                <Button
                                    className="w-full py-4"
                                    onClick={() => addToCart(product, customer || { name: "Guest", email: "guest@example.com" })}
                                >
                                    <ShoppingCart /> <span className="text-sm">Add to Cart</span>
                                </Button>
                            ) : (
                                <Button className="w-full py-4" disabled>
                                    <ShoppingCart /> <span className="text-sm">Out of Stock</span>
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
