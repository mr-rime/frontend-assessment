import { fallback } from '@tanstack/zod-adapter'
import * as z from "zod"

export const baseSearchSchema = z.object({
    page: fallback(z.number().int().positive().optional(), 1),
    pageSize: fallback(z.number().int().positive().optional(), 10),
    sortBy: fallback(z.string().optional(), ''),
    filterBy: fallback(z.string().optional(), ''),
    order: fallback(z.enum(['asc', 'desc']).optional(), 'asc'),
    q: fallback(z.string().optional(), ''),
})
