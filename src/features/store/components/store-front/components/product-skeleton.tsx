import { Skeleton } from "@/shared/components/ui/skeleton";

export function ProductSkeleton() {
    return (
        <div className="bg-card rounded-lg overflow-hidden border border-border">
            <div className="aspect-square">
                <Skeleton className="w-full h-full rounded-none" />
            </div>

            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-6 w-24" />
            </div>
        </div>
    );
}
