import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LogIn />,
        children: [
            {
                path: '/',
                element: <LogIn />
            },

        ]
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/myProfile',
        element: <MyProfile />
    }
])