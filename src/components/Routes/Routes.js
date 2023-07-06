import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Homepage from "../Pages/Homepage/Homepage";
import Item from "../Pages/Homepage/TrendyItem/Items/Item/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path:"/item",
        element:<Item></Item>
      }
    ],
  },
]);

export default router;
