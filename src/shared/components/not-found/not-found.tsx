import { Button } from "@/shared/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link, useRouter } from "@tanstack/react-router";

interface NotFoundProps {
    title?: string;
    message?: string;
}

export function NotFound({
    title = "404 - Page Not Found",
    message = "The page you're looking for doesn't exist or has been moved."
}: Partial<NotFoundProps>) {
    const router = useRouter();

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 bg-background">
            <div className="max-w-md w-full space-y-8 text-center p-10 rounded-2xl border shadow-2xl relative overflow-hidden group">

                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
                    <p className="text-muted-foreground text-sm">
                        {message}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-4">
                    <Button
                        variant="default"
                        asChild
                        className="w-full gap-2 transition-transform active:scale-95"
                    >
                        <Link to="/" preload="intent">
                            <Home size={18} />
                            Back to Shop
                        </Link>
                    </Button>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            onClick={() => router.history.back()}
                            className="flex-1 gap-2 transition-transform active:scale-95"
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
