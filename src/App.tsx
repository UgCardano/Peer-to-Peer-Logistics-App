import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLaout from "./layout/AppLayout";
import HomePage from "./pages/home";
import SendParcel from "./pages/send";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLaout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "send", element: <SendParcel /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
