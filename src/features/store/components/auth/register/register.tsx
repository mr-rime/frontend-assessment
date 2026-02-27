import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { PasswordInput } from "@/shared/components/ui/password-input";
import { Link } from "@tanstack/react-router";

export function Register() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create Account</h1>
                        <CardDescription>Sign up to start shopping with us</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form action="" className="space-y-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="you@example.com" />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-3">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <Label htmlFor="password">Password</Label>
                            <PasswordInput id="password" />

                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <PasswordInput id="confirm-password" />
                        </form>
                        <Button className="w-full">Create Account</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground w-full text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary underline">Sign in</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
