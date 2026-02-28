import * as z from "zod";


const CustomerSchema = z.object({
    id: z.string().optional(),
    name: z.string()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(50, { message: "Name must be at most 50 characters" }),
    email: z.string()
        .min(3, { message: "Email must be at least 3 characters" })
        .max(50, { message: "Email must be at most 50 characters" }),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

type Customer = z.infer<typeof CustomerSchema>

export { CustomerSchema, type Customer };