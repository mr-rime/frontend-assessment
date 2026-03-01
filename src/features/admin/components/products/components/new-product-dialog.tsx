import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { ProductSchema, type Product } from "../schemas/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useCreateProductMutation } from "../hooks/use-create-product-mutation";
import * as React from "react";
import { goeyToast } from "goey-toast";
import { Textarea } from "@/shared/components/ui/textarea";

const CATEGORIES = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Beauty & Personal Care",
    "Toys & Games",
    "Books",
    "Automotive"
];

export function NewProductDialog() {
    const [openDialog, setOpenDialog] = React.useState(false);

    const form = useForm<Product>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            stock: 0,
            category: ""
        }
    });

    const createProductMutation = useCreateProductMutation();

    const onSubmit = (data: Product) => {
        createProductMutation.mutate(data, {
            onSuccess: () => {
                form.reset();
                goeyToast.success("Product created", { description: "Product created successfully" });
                setOpenDialog(false);
            }
        });
    }

    return (
        <div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                    <Button>New Product</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="product-form">
                    <DialogHeader>
                        <DialogTitle>
                            <h3 className="text-center">New Product</h3>
                        </DialogTitle>
                    </DialogHeader>
                    <form id="product-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.name}>
                                    <FieldLabel htmlFor={field.name}>Product Name</FieldLabel>
                                    <Input {...field} id={field.name} placeholder="Product Name" aria-invalid={!!form.formState.errors.name} />
                                    {form.formState.errors.name && <FieldError>{form.formState.errors.name.message}</FieldError>}
                                </Field>
                            )}
                        />

                        <Controller
                            name="category"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.category}>
                                    <FieldLabel htmlFor={field.name}>Category</FieldLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger id={field.name} className="w-full">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {CATEGORIES.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.category && <FieldError>{form.formState.errors.category.message}</FieldError>}
                                </Field>
                            )}
                        />

                        <Controller
                            name="price"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.price}>
                                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                                    <Input {...field} id={field.name} placeholder="Price" type="number" step="0.01" min={0} aria-invalid={!!form.formState.errors.price} onChange={e => field.onChange(e.target.valueAsNumber)} />
                                    {form.formState.errors.price && <FieldError>{form.formState.errors.price.message}</FieldError>}
                                </Field>
                            )}
                        />

                        <Controller
                            name="stock"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.stock}>
                                    <FieldLabel htmlFor={field.name}>Stock</FieldLabel>
                                    <Input {...field} id={field.name} placeholder="Price" type="number" min={0} aria-invalid={!!form.formState.errors.stock} onChange={e => field.onChange(e.target.valueAsNumber)} />
                                    {form.formState.errors.stock && <FieldError>{form.formState.errors.stock.message}</FieldError>}
                                </Field>
                            )}
                        />

                        <Controller
                            name="description"
                            control={form.control}
                            render={({ field }) => (
                                <Field data-invalid={!!form.formState.errors.description}>
                                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                                    <Textarea {...field} id={field.name} placeholder="Description" aria-invalid={!!form.formState.errors.description} />
                                </Field>
                            )}
                        />
                    </form>
                    <DialogFooter>
                        {
                            !createProductMutation.isPending ?
                                <Button className="w-full" form="product-form" type="submit">
                                    Create
                                </Button> : <Button className="w-full">
                                    <Loader className="animate-spin" />
                                </Button>
                        }
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

