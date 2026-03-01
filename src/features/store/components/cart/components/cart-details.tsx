import { formatNumberToUSD } from "@/shared/lib/format-number-to-usd";
import type { CartItem } from "../types";
import { Button } from "@/shared/components/ui/button";
import { useCartStore } from "../store";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import type { LocalOrder } from "@/shared/types";

type CartDetailsProps = {
    total: number;
    cart: CartItem[];
}

export function CartDetails({ total, cart }: CartDetailsProps) {
    const clearCart = useCartStore((state) => state.clearCart);
    const [orders, setOrders] = useLocalStorage<LocalOrder[]>("orders", []);
    const customer = cart[0]?.customer || { name: "Guest", email: "guest@example.com" };

    const handleCheckout = () => {
        setOrders([...orders, { id: crypto.randomUUID(), status: "pending", products: cart.map((item) => item.product), total, customer, createdAt: new Date(), updatedAt: new Date() }]);
        clearCart();
    };

    return (
        <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 bg-card sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{formatNumberToUSD(total)}</span>
                    </div>
                </div>

                {
                    cart.length > 0 ? (
                        <Button className="w-full" onClick={handleCheckout}>
                            Proceed to checkout
                        </Button>
                    ) : (
                        <Button className="w-full" disabled>
                            Proceed to checkout
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
