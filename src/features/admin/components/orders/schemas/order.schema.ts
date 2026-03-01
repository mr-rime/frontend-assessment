import * as z from "zod";
import { CustomerSchema } from "../../customers/schemas";

const OrderStatusEnum = z.enum([
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
]);

const OrderSchema = z.object({
    id: z.string().optional(),
    status: OrderStatusEnum,
    customer: CustomerSchema,
    total: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

type Order = z.infer<typeof OrderSchema>;
type OrderStatus = z.infer<typeof OrderStatusEnum>;

export { OrderSchema, OrderStatusEnum, type Order, type OrderStatus };