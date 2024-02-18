import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

//  --old
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "about",
//         element: <AboutMe></AboutMe>,
//       },
//     ],
//   },
// ]);
