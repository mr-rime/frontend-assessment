import { Button } from "@/shared/components/ui/button";
import { SearchInput } from "@/shared/components/ui/search-input";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export function StoreHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <Button variant={"ghost"} asChild>
                            <Link to="/cart"><ShoppingCart size={21} /></Link>
                        </Button>
                        <Button variant={"ghost"} asChild>
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
