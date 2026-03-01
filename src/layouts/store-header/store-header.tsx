import { useCartStore } from "@/features/store/components/cart/store";
import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { Button } from "@/shared/components/ui/button";
import { SearchInput } from "@/shared/components/ui/search-input";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { goeyToast } from "goey-toast";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";
import type { Customer } from "@/features/admin/components/customers/schemas";
import { useState, useEffect, useEffectEvent } from "react";
import { useDebounce } from "@/shared/hooks/use-debounce";

export function StoreHeader() {
    const cart = useCartStore(state => state.cart);
    const { isAuthenticated, user, logout } = useUserAuthStore();
    const navigate = useNavigate();
    const search = useSearch({ from: '/(store)/_store-layout' });
    const [searchValue, setSearchValue] = useState(search.q || "");

    const handleLogout = () => {
        logout();
        goeyToast.success("Logged out successfully!");
    }

    const debouncedNavigate = useDebounce((value: string) => {
        navigate({
            to: '/',
            search: (prev) => ({
                ...prev,
                q: value,
                page: 1,
                sortBy: prev.sortBy || 'name',
                order: prev.order || 'asc',
                category: prev.category || [],
            })
        });
    }, 500);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        debouncedNavigate(value);
    }

    const setSearchValueEffect = useEffectEvent(setSearchValue);

    useEffect(() => {
        setSearchValueEffect(search.q || "");
    }, [search.q]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-4">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu size={21} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="px-5">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8 flex flex-col gap-6">
                                    <Link to="/" className="text-lg font-semibold border-b pb-2">
                                        Home
                                    </Link>
                                    <div className="space-y-4">
                                        <p className="text-sm font-medium text-muted-foreground">Account</p>
                                        <UserMenu isMobile isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <Link to="/" className="font-bold text-xl whitespace-nowrap">
                            Frontend Store
                        </Link>
                    </div>

                    <div className="flex-1 max-w-md hidden md:block">
                        <SearchInput value={searchValue} onChange={onSearchChange} />
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="relative">
                            {cart.length > 0 && (
                                <div className="absolute -top-1 -right-2 w-5 h-5 bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold rounded-full z-10">
                                    {cart.length}
                                </div>
                            )}
                            <Button variant={"ghost"} size="icon" asChild>
                                <Link to="/cart" preload="intent" >
                                    <ShoppingCart size={21} />
                                </Link>
                            </Button>
                        </div>
                        <div className="hidden md:block">
                            <UserMenu isMobile={false} isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />
                        </div>
                    </div>
                </div>
                <div className="pb-3 md:hidden">
                    <SearchInput value={searchValue} onChange={onSearchChange} />
                </div>
            </div>
        </header>
    )
}

const UserMenu = ({ isMobile = false, isAuthenticated, user, handleLogout }: { isMobile?: boolean, isAuthenticated: boolean, user: Customer | null, handleLogout: () => void }) => (
    <>
        {isAuthenticated ? (
            <div className={isMobile ? "flex flex-col gap-4" : "flex items-center gap-3"}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={16} />
                    <span>{isMobile ? user?.name : user?.name.split(" ")[0]}</span>
                </div>
                <Button variant={isMobile ? "default" : "outline"} size="sm" onClick={handleLogout} className={isMobile ? "w-full" : ""}>
                    Log out
                </Button>
            </div>
        ) : (
            <Button variant={"ghost"} asChild className={isMobile ? "w-full justify-start" : ""}>
                <Link to="/login" preload={"intent"}>Sign In</Link>
            </Button>
        )}
    </>
);