import { Button } from "@/shared/components/ui/button";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }:  Partial<FallbackProps>) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : null;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="max-w-md w-full space-y-8 text-center bg-card p-10 rounded-2xl border shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />

                <div className="flex justify-center">
                    <div className="p-4 bg-destructive/10 rounded-full text-destructive animate-pulse">
                        <AlertCircle size={48} />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold tracking-tight">Oops! Something went wrong</h1>
                    <p className="text-muted-foreground text-sm">
                        An unexpected error occurred. Don't worry, it's not you, it's us.
                    </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg text-left overflow-auto max-h-40 border transition-colors hover:border-destructive/30">
                    <p className="text-xs font-mono text-destructive/80 wrap-break-word">
                        {errorMessage}
                    </p>
                    {errorStack && (
                        <pre className="text-[10px] mt-2 text-muted-foreground opacity-50 select-none pointer-events-none">
                            {errorStack.split('\n').slice(0, 3).join('\n')}
                        </pre>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <Button
                        onClick={resetErrorBoundary}
                        className="w-full gap-2 transition-transform active:scale-95"
                    >
                        <RotateCcw size={18} />
                        Try again
                    </Button>
                    <Button
                        variant="outline"
                        asChild
                        className="w-full gap-2 transition-transform active:scale-95"
                    >
                        <Link to="/" search={{ page: 1, sortBy: 'name', order: 'asc', category: [], q: '' }} onClick={resetErrorBoundary}>
                            <Home size={18} />
                            Go home
                        </Link>
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground/60 italic pt-2">
                    If this persists, please contact support.
                </p>
            </div>
        </div>
    );
}
