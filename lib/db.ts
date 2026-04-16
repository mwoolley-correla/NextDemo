import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import "server-only";

export type TodoRecord = {
  id: number;
  title: string;
  completed: number;
  created_at: string;
};

const dataDirectory = path.join(process.cwd(), "data");
const databasePath = path.join(dataDirectory, "nextdemo.sqlite");

fs.mkdirSync(dataDirectory, { recursive: true });

const database = new Database(databasePath);

database.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

export function listTodos() {
  return database
    .prepare("SELECT id, title, completed, created_at FROM todos ORDER BY id DESC")
    .all() as TodoRecord[];
}

export function createTodo(title: string) {
  const statement = database.prepare("INSERT INTO todos (title) VALUES (?)");
  statement.run(title);
}

export function toggleTodo(id: number) {
  const statement = database.prepare(`
    UPDATE todos
    SET completed = CASE completed WHEN 1 THEN 0 ELSE 1 END
    WHERE id = ?
  `);
  statement.run(id);
}

export function deleteTodo(id: number) {
  const statement = database.prepare("DELETE FROM todos WHERE id = ?");
  statement.run(id);
}
