import type { Product } from "@/features/admin/components/products/schemas";
import { formatNumberToUSD } from "@/shared/lib/format-number-to-usd";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export function Product({ id, name, price }: Product) {
    return (
        <Link
            key={id}
            to="/product/$productId"
            params={{ productId: id || "" }}
            className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
        >
            <div className="aspect-square bg-muted">
                <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    layout="constrained"
                    width={500}
                    height={500}
                    loading="lazy"
                    src="/image-1.webp"
                    alt="Product 1"
                />
            </div>

            <div className="p-4 space-y-2">
                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>
                <p className="text-lg font-bold">{formatNumberToUSD(price)}</p>
            </div>
        </Link>
    );
}