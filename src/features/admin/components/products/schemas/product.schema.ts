
import * as z from "zod";

const ProductSchema = z.object({
    id: z.string().optional(),
    name: z.string()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(50, { message: "Name must be at most 50 characters" }),

    category: z.string()
        .min(3, { message: "Category must be at least 3 characters" })
        .max(50, { message: "Category must be at most 50 characters" }),

    description: z.string().optional(),

    price: z.coerce.number().nonnegative()
        .min(1, { message: "Price must be at least 1" }),

    image: z.string().optional(),

    stock: z.coerce.number().nonnegative()
        .min(1, { message: "Stock must be at least 1" }),
});

type Product = z.infer<typeof ProductSchema>;

export { ProductSchema, type Product };