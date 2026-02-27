import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { PasswordInput } from "@/shared/components/ui/password-input";
import { Link } from "@tanstack/react-router";

export function Login() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
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
                    <CardFooter>
                        <p className="text-sm text-muted-foreground w-full text-center">
                            Already have an account?{" "}
                            <Link to="/register" className="text-primary underline">Register</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
