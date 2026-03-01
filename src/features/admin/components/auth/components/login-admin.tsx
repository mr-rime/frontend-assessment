import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { PasswordInput } from "@/shared/components/ui/password-input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginFormData } from "../schemas/login.schema"
import { useAdminAuthStore } from "@/features/admin/components/auth/store/admin-auth.store"
import { goeyToast } from "goey-toast"
import { useNavigate } from "@tanstack/react-router"

export function LoginAdmin() {
    const { login } = useAdminAuthStore()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "admin@admin.com", password: "password123" }
    })

    const onSubmit = (data: LoginFormData) => {
        if (data.email === "admin@admin.com" && data.password === "password123") {
            login({ email: data.email, name: "Admin User" })
            goeyToast.success("Login successful", { description: "Welcome back, Admin" })
            navigate({ to: "/admin/products", search: { page: 1, pageSize: 10, order: 'asc', sortBy: '', filterBy: '', q: '', filters: {} } })
        } else {
            goeyToast.error("Login failed", { description: "Invalid email or password" })
        }
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <Card className=" w-full">
                    <CardHeader className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Admin Login</h1>
                        <CardDescription>Sign in to access the admin dashboard</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" {...register("email")} />
                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput id="password" {...register("password")} />
                                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                            </div>
                            <Button type="submit" className="w-full">Sign In</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
