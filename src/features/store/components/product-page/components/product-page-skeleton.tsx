import { Skeleton } from "@/shared/components/ui/skeleton";

export function ProductPageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 space-y-8">
            <Skeleton className="h-4 w-64" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="lg:sticky lg:top-20 lg:self-start">
                    <div className="space-y-4">
                        <div className="relative aspect-square">
                            <Skeleton className="w-full h-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-3/4" />
                        <Skeleton className="h-8 w-1/4" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                    <div>
                        <Skeleton className="h-5 w-24" />
                    </div>
                    <div className="pt-4">
                        <Skeleton className="h-14 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
