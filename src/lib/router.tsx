import { createBrowserRouter } from "react-router";
import Home from "../pages/home/index";
import RootLayout from "@/layouts/root_layout";
import ProductDetail from "@/pages/home/product-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:name",
        element: <ProductDetail />,
      },
    ],
  },
]);
