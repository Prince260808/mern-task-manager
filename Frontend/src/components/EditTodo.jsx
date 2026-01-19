import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  // Load existing todo
  useEffect(() => {
    const loadTodo = async () => {
      try {
        const res = await api.get(`/todo/${id}`);
        const todo = res.data.data;

        setForm({
          title: todo.title || "",
          description: todo.description || "",
          isCompleted: todo.isCompleted || false,
        });
      } catch (error) {
        console.error("Failed to load todo", error);
      }
    };

    loadTodo();
  }, [id]);

  // Handle input & checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/todo/${id}`, form); 
      navigate("/todo");
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Todo description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
}
