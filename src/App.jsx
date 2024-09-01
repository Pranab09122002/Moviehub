import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mipic from "./assets/ME.jpg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import AppLayout from "./components/layout/AppLayout";
import Movie from "./pages/Movie";
import Contact, { ContactData } from "./pages/Contact";
import Error from "./pages/Error";
import { getMovieData } from "./api/GetApiData";
import MovieDetail from "./components/layout/Ui/MovieDetail";
import { getMovieDetail } from "./api/getMovieDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMovieData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetail/>,
          loader: getMovieDetail,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: ContactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
