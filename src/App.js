import React, { lazy, Suspense } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ShimmerCard } from "./Components/Shimmer";
const App = () => {
  return (
    <div className="main-app scroll-smooth">
      <Header />
      <Outlet />
    </div>
  );
};

const ProductDetails = lazy(() => import("./Components/ProductDetails"));
export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <ProductDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <div>we got an error</div>,
  },
]);
