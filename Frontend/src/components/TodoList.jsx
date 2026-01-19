import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTodos = async () => {
    try {
      const res = await api.get("/todo");
      setTodos(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    const res = await api.patch(`/todo/${id}/toggle`);

    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? res.data.data : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todo/${id}`);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link
          to="/todo/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Todo
        </Link>
      </div>

      <div className="space-y-4">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">
            No todos found
          </p>
        )}

        {todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h3
                className={`font-semibold ${
                  todo.isCompleted
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {todo.title}
              </h3>

              {todo.description && (
                <p className="text-sm text-gray-600">
                  {todo.description}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleStatus(todo._id)}
                className={`px-3 py-1 rounded text-sm ${
                  todo.isCompleted
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {todo.isCompleted ? "Completed" : "Pending"}
              </button>

              <Link
                to={`/todo/${todo._id}`}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteTodo(todo._id)}
                className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
