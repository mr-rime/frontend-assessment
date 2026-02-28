import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Paginated } from "../types";

interface PaginationProps {
    currentPage: Paginated["currentPage"];
    totalPages: Paginated["totalPages"];
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {

    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage > 3) pages.push("...");

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) pages.push("...");

        pages.push(totalPages);

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            >
                <ChevronLeft />
            </Button>

            {pageNumbers.map((page, index) => (
                <Button
                    key={index}
                    variant={page === currentPage ? "default" : "outline"}
                    disabled={page === "..."}
                    onClick={() =>
                        typeof page === "number" && onPageChange(page)
                    }
                >
                    {page}
                </Button>
            ))}

            <Button
                variant="outline"
                disabled={currentPage >= totalPages}
                onClick={() =>
                    onPageChange(Math.min(totalPages, currentPage + 1))
                }
            >
                <ChevronRight />
            </Button>
        </div>
    );
}