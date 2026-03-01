import { useCartStore } from "@/features/store/components/cart/store";
import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { Button } from "@/shared/components/ui/button";
import { SearchInput } from "@/shared/components/ui/search-input";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, User } from "lucide-react";

export function StoreHeader() {
    const cart = useCartStore(state => state.cart);
    const { isAuthenticated, user, logout } = useUserAuthStore();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link to="/" search={{ page: 1, order: "asc", sortBy: "name", category: [] }}>Logo</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <div className="relative">
                            {cart.length > 0 && <div className="absolute -top-1 -right-2 w-5 h-5 bg-white flex items-center justify-center text-black text-sm rounded-full">
                                {cart.length}
                            </div>}
                            <Button variant={"ghost"} asChild>
                                <Link to="/cart"><ShoppingCart size={21} /></Link>
                            </Button>
                        </div>
                        {isAuthenticated ? (
                            <div className="flex items-center gap-3">
                                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                                    <User size={16} />
                                    <span>{user?.firstName}</span>
                                </div>
                                <Button variant={"outline"} size="sm" onClick={() => logout()}>
                                    Log out
                                </Button>
                            </div>
                        ) : (
                            <Button variant={"ghost"} asChild>
                                <Link to="/login">Sign In</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
