import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "./input"
import { cn } from "@/shared/lib/utils"

type SearchInputProps = React.ComponentProps<"input"> & {
    className?: string
}

export function SearchInput({
    className,
    id = "search",
    ...props
}: SearchInputProps) {
    return (
        <div className="w-full">
            <label htmlFor={id} className="sr-only">
                Search
            </label>

            <div className="relative">
                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
                />

                <Input
                    id={id}
                    type="search"
                    className={cn("pl-9", className)}
                    placeholder="Search products..."
                    {...props}
                />
            </div>
        </div>
    )
}