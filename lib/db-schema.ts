import { z } from "zod";

export const todoTitleSchema = z
  .string()
  .trim()
  .min(3, "Todo title must be at least 3 characters long.")
  .max(120, "Todo title must stay under 120 characters.");

export const todoCreateSchema = z.object({
  title: todoTitleSchema,
});

export const todoIdSchema = z.coerce.number().int().positive();

export type TodoCreateInput = z.infer<typeof todoCreateSchema>;
