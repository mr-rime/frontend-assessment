import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { PasswordInput } from "@/shared/components/ui/password-input";
import { Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema, type RegisterUserFormData } from "../../schemas/auth.schemas";
import { goeyToast } from "goey-toast";
import { useRegisterUser } from "../../hooks/use-register-user";
import { Loader } from "lucide-react";

export function Register() {
    const navigate = useNavigate();
    const { mutate: registerUser, isPending } = useRegisterUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterUserFormData>({
        // @ts-expect-error I used this because there are versions mismatch between react-hook-form and zod
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: RegisterUserFormData) => {
        registerUser(data, {
            onSuccess: () => {
                goeyToast.success("Account created successfully!");
                navigate({ to: "/", search: { page: 1, order: 'asc', sortBy: 'name', category: [], q: '' } });
            },
            onError: (error) => {
                goeyToast.error("Registration failed", { description: error.message });
            },
        });
    };
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create Account</h1>
                        <CardDescription>Sign up to start shopping with us</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" placeholder="you@example.com" {...register("email")} />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" {...register("firstName")} />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput id="password" {...register("password")} />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <PasswordInput id="confirmPassword" {...register("confirmPassword")} />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                            </div>

                            {
                                isPending ? (
                                    <Button className="w-full" disabled>
                                        <Loader className=" animate-spin" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="w-full">
                                        Create Account
                                    </Button>
                                )
                            }
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground w-full text-center">
                            Already have an account?{" "}
                            <Link to="/login" search={{
                                page: 1,
                                order: 'asc',
                                sortBy: 'name',
                                category: [],
                                q: ''
                            }} className="text-primary underline">Sign in</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
