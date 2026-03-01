import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { PasswordInput } from "@/shared/components/ui/password-input";
import { Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema, type LoginUserFormData } from "../../schemas/auth.schemas";
import { goeyToast } from "goey-toast";
import { useLoginUser } from "../../hooks/use-login-user";
import { Loader } from "lucide-react";

export function Login() {
    const navigate = useNavigate();
    const { mutate: loginUser, isPending } = useLoginUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserFormData>({

        // @ts-expect-error I used this because there are versions mismatch between react-hook-form and zod
        resolver: zodResolver(loginUserSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginUserFormData) => {
        loginUser(data, {
            onSuccess: () => {
                navigate({ to: "/", search: { page: 1, order: 'asc', sortBy: 'name', category: [], q: '' } });
            },
            onError: (error) => {
                goeyToast.error("Sign in failed", { description: error.message });
            },
        });
    };
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" {...register("email")} />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput id="password" {...register("password")} />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>

                            {
                                isPending ? (
                                    <Button className="w-full" disabled>
                                        <Loader className=" animate-spin" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="w-full">
                                        Sign In
                                    </Button>
                                )
                            }
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground w-full text-center">
                            Already have an account?{" "}
                            <Link to="/register" search={{
                                page: 1,
                                order: 'asc',
                                sortBy: 'name',
                                category: [],
                                q: ''
                            }} className="text-primary underline">Register</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
