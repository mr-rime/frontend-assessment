import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { PasswordInput } from "@/shared/components/ui/password-input"

export function LoginAdmin() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Admin Login</h1>
                        <CardDescription>Sign in to access the admin dashboard</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form action="" className="space-y-4">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Email" />
                            <Label htmlFor="password">Password</Label>
                            <PasswordInput />
                        </form>
                        <Button className="w-full">Sign In</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
