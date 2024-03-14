import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movies";
import TVSeries from "./pages/tvseries";
import Bookmark from "./pages/bookmarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TVSeries />,
    errorElement: <Error />,
  },
]);
