import { CartItem } from "./cart-item";
import { useCartStore } from "../store";
import { CartDetails } from "./cart-details";

export function Cart() {
    const cart = useCartStore((state) => state.cart);

    const total = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            {
                cart.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">Your cart is empty.</p>
                    </div>
                )
            }
            {
                cart.length > 0 && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                            ))}

                        </div>
                        <CartDetails total={total} cart={cart} />
                    </div>
                )
            }
        </div>
    )
}
