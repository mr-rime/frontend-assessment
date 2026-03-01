import { Eye, EyeOff } from "lucide-react";
import { Input } from "./input";
import * as React from "react"
type PasswordInputProps = React.ComponentProps<"input">

export function PasswordInput({ ...props }: PasswordInputProps) {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
        <div className="relative">
            <Input
                placeholder="Password"
                className="w-full rounded-md border border-muted-foreground/30 bg-transparent px-3 py-2 text-sm outline-none"
                type={showPassword ? "text" : "password"}
                {...props}
            />
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
            >
                {showPassword ? (
                    <EyeOff size={17} className="text-muted-foreground" />
                ) : (
                    <Eye size={17} className="text-muted-foreground" />
                )}
            </button>
        </div>

    )
}
