import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function AddTodo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/todo/add", form);
    navigate("/todo");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          required
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="isCompleted"
            checked={form.isCompleted}
            onChange={handleChange}
          />
          Mark as completed
        </label> */}

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Save Todo
        </button>
      </form>
    </div>
  );
}
