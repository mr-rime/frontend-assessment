import { StoreHeader } from "../store-header";

export function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <StoreHeader />
            {children}
        </div>
    )
}
