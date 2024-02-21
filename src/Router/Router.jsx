import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";

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
