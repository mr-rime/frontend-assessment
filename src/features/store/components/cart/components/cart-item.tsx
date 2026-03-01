import type { Product } from "@/features/admin/components/products/schemas";
import { Button } from "@/shared/components/ui/button";
import { formatNumberToUSD } from "@/shared/lib/format-number-to-usd";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "../store";

export function CartItem({ product, quantity }: { product: Product; quantity: number }) {
    const { id, name, price, image } = product;
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg  bg-card">
            <Link to="/product/$productId" params={{ productId: id || "" }} className="shrink-0">
                <Image
                    className="rounded-md object-cover w-full sm:w-30 h-30"
                    layout="constrained"
                    width={500}
                    height={500}
                    loading="lazy"
                    src={image || "/image-1.webp"}
                    alt={name}
                />
            </Link>
            <div className="grow min-w-0 flex flex-col justify-between">
                <Link to="/product/$productId" params={{ productId: id || "" }} className="font-semibold hover:underline block">
                    {name}
                </Link>
                <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center gap-2 border rounded-md">
                        <Button
                            variant={"ghost"}
                            className="rounded-r-none"
                            onClick={() => updateQuantity(product, quantity - 1)}
                        >
                            <Minus />
                        </Button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <Button
                            variant={"ghost"}
                            className="rounded-l-none"
                            onClick={() => updateQuantity(product, quantity + 1)}
                        >
                            <Plus />
                        </Button>
                    </div>
                    <div>
                        <Button variant={"ghost"} onClick={() => removeFromCart(product)}>
                            <X className="text-red-500" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block text-right shrink-0">
                <p className="font-semibold text-lg">
                    {formatNumberToUSD(price * quantity)}
                </p>
                {quantity > 1 && (
                    <p className="text-sm text-muted-foreground italic">
                        {formatNumberToUSD(price)} each
                    </p>
                )}
            </div>
        </div>
    );
}
