import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../comp/landing";
import Post from "../comp/post";
import Home from "../comp/home";
import Board from "../comp/boards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/landing", element: <Landing /> },
      { path: "/post", element: <Post /> },
      { path: "/board", element: <Board /> },
    ],
  },
]);
