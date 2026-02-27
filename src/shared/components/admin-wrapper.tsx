
type AdminWrapperProps = {
    title: string
    controls?: React.ReactNode
    children: React.ReactNode
}


export function AdminWrapper({ title, controls, children }: AdminWrapperProps) {
    return (
        <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">
                    {title}
                </h1>

                {controls}
            </div>

            {children}
        </div>
    )
}