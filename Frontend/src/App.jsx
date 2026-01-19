// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2 style={{ textAlign: "center" }}>404 – Page Not Found</h2>,
    children: [
      {
        index: true,
        element: <Todo />,         
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "todo/add",
        element: <AddTodo />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "todo/:id",       // dynamic edit
        element: <EditTodo />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
