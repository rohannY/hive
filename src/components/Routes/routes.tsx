import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import _Post from "../post/post";
import Home from "../pages/home";
import Board from "../pages/boards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/landing", element: <Landing /> },
      { path: "/post/:id", element: <_Post /> },
      { path: "/board", element: <Board /> },
    ],
  },
]);
