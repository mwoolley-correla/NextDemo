import Badge from "@/components/atoms/Badge";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import TodoCreateForm from "@/components/organisms/TodoCreateForm";
import { deleteTodoAction, toggleTodoAction } from "@/lib/actions/todos";
import { listTodos } from "@/lib/db";

export default function TodosPage() {
  const todos = listTodos();
  const completedCount = todos.filter((todo) => todo.completed === 1).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Database & Zod" }]} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 7: Database & Zod
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        This stage uses SQLite for persistence and Zod for validation. Add a todo, refresh the page, and the record stays in the database.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total todos</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{todos.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{completedCount}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Validation</p>
          <div className="mt-3">
            <Badge tone="info">Zod enforced</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <TodoCreateForm />

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Persisted todos</h2>

          {todos.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No todos yet. Add one to create the SQLite file and store your first row.
            </p>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p
                        className={`font-medium ${
                          todo.completed === 1
                            ? "text-gray-400 line-through dark:text-gray-500"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {todo.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Created: {todo.created_at}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <form action={toggleTodoAction}>
                        <input type="hidden" name="id" value={todo.id} />
                        <button
                          type="submit"
                          className="rounded-lg bg-emerald-100 px-3 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900"
                        >
                          {todo.completed === 1 ? "Mark incomplete" : "Mark complete"}
                        </button>
                      </form>
                      <form action={deleteTodoAction}>
                        <input type="hidden" name="id" value={todo.id} />
                        <button
                          type="submit"
                          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-200 dark:bg-red-950 dark:text-red-300 dark:hover:bg-red-900"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
