import { Button } from "@/shared/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { useNavigate, useSearch } from "@tanstack/react-router";

const sortOptions = [
    { label: "Name: A to Z", value: "name-asc", sortBy: "name", order: "asc" },
    { label: "Name: Z to A", value: "name-desc", sortBy: "name", order: "desc" },
    { label: "Price: Low to High", value: "price-asc", sortBy: "price", order: "asc" },
    { label: "Price: High to Low", value: "price-desc", sortBy: "price", order: "desc" },
] as const;

export function ProductsFilter() {
    const navigate = useNavigate({ from: "/" });
    const { sortBy, order } = useSearch({
        from: "/(store)/_store-layout",
    });

    const currentSort = sortOptions.find(opt => opt.sortBy === sortBy && opt.order === order);

    const handleSortChange = (option: typeof sortOptions[number]) => {
        navigate({
            search: (prev) => ({
                ...prev,
                sortBy: option.sortBy,
                order: option.order,
                page: 1,
                q: prev.q,
            }),
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-50 flex items-center justify-between">
                    <span className="truncate">{currentSort?.label ?? "Name: A to Z"}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:w-50 w-(--radix-dropdown-menu-trigger-width) align-end">
                {sortOptions.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => handleSortChange(option)}
                        className="flex items-center justify-between"
                    >
                        <span>{option.label}</span>
                        {currentSort?.value === option.value && <Check className="h-4 w-4" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
