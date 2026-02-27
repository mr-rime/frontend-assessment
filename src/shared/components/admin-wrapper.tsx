
type AdminWrapperProps = {
    title: string
    children: React.ReactNode
}


export function AdminWrapper({ title, children }: AdminWrapperProps) {
    return (
        <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">
                    {title}
                </h1>

                <div>
                    controls
                </div>
            </div>

            {children}
        </div>
    )
}