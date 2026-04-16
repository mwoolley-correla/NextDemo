"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { createTodoAction, type TodoFormState } from "@/lib/actions/todos";
import { useActionState, useEffect, useRef } from "react";

const initialTodoFormState: TodoFormState = {
  success: false,
  message: "Add a todo to see SQLite persistence in action.",
  errors: {},
};

export default function TodoCreateForm() {
  const [state, formAction, isPending] = useActionState(
    createTodoAction,
    initialTodoFormState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-3 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Todo title
        </label>
        <Input name="title" placeholder="Explain what a server action does" />
        {state.errors.title ? (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.title[0]}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Add todo"}
        </Button>
        <p className={`text-sm ${state.success ? "text-emerald-600 dark:text-emerald-400" : "text-gray-500 dark:text-gray-400"}`}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
