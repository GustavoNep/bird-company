import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { createRoot } from "react-dom";
import {store, persistor} from "./redux/store";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Success from "./pages/Sucess";
import { PersistGate } from 'redux-persist/integration/react'


const AppRouter = () => {
  const user = useSelector((state) => state.user.currentUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:category",
          element: <ProductList />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Home /> : <Register />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <AppRouter />

  </PersistGate>
  </Provider>
);
