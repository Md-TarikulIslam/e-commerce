import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Homepage from "../Pages/Homepage/Homepage";
import Item from "../Pages/Homepage/TrendyItem/Items/Item/Item";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Functionalities/Payment/Payment";

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
        path: "/item",
        element: <Item></Item>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
    ],
  },
]);

export default router;
