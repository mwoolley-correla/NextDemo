"use server";

import { createTodo, deleteTodo, toggleTodo } from "@/lib/db";
import { todoCreateSchema, todoIdSchema } from "@/lib/db-schema";
import { logInfo, logWarn } from "@/lib/logging";
import { measureAsync } from "@/lib/telemetry";
import { revalidatePath } from "next/cache";

export type TodoFormState = {
  success: boolean;
  message: string;
  errors: {
    title?: string[];
  };
};

export async function createTodoAction(
  _previousState: TodoFormState,
  formData: FormData
): Promise<TodoFormState> {
  return measureAsync(
    "todo.create",
    async () => {
      const parsed = todoCreateSchema.safeParse({
        title: formData.get("title"),
      });

      if (!parsed.success) {
        logWarn("Todo validation failed", {
          fields: Object.keys(parsed.error.flatten().fieldErrors),
        });

        return {
          success: false,
          message: "Validation failed.",
          errors: parsed.error.flatten().fieldErrors,
        };
      }

      createTodo(parsed.data.title);
      logInfo("Todo created", { title: parsed.data.title });
      revalidatePath("/todos");

      return {
        success: true,
        message: `Added "${parsed.data.title}" to the database.`,
        errors: {},
      };
    },
    { route: "/todos" }
  );
}

export async function toggleTodoAction(formData: FormData) {
  await measureAsync(
    "todo.toggle",
    async () => {
      const id = todoIdSchema.parse(formData.get("id"));
      toggleTodo(id);
      logInfo("Todo toggled", { id });
      revalidatePath("/todos");
    },
    { route: "/todos" }
  );
}

export async function deleteTodoAction(formData: FormData) {
  await measureAsync(
    "todo.delete",
    async () => {
      const id = todoIdSchema.parse(formData.get("id"));
      deleteTodo(id);
      logInfo("Todo deleted", { id });
      revalidatePath("/todos");
    },
    { route: "/todos" }
  );
}
