import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRootLayout from "./components/layout/admin/RootLayout";
import AppRootLayout from "./components/layout/app/RootLayout";
import Dashboard from "./pages/admin/admin-panel/Dashboard";
import UsersList from "./pages/admin/users/UsersList";
import NewUser from "./pages/admin/users/NewUser";
import EditUser from "./pages/admin/users/EditUser";
import ProductsList from "./pages/admin/products/ProductsList";
import NewProduct from "./pages/admin/products/NewProduct";
import EditProduct from "./pages/admin/products/EditProduct";

const router = createBrowserRouter([
  { path: "/login" },
  {
    path: "/admin",
    element: <AdminRootLayout />,
    children: [
      { path: "/admin", element: <Dashboard /> },
      { path: "/admin/users", element: <UsersList /> },
      { path: "/admin/users/new", element: <NewUser /> },
      { path: "/admin/users/:userId/edit", element: <EditUser /> },
      { path: "/admin/products", element: <ProductsList /> },
      { path: "/admin/products/new", element: <NewProduct /> },
      { path: "/admin/products/:productId/edit", element: <EditProduct /> },
    ],
  },
  {
    path: "/",
    element: <AppRootLayout />,
    children: [{ path: "/" }, { path: "/contact-us" }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
