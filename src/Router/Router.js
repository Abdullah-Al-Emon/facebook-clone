import { createBrowserRouter } from "react-router-dom";
import Friends from "../Pages/Firends/Friends";
import HomePageLayout from "../Layout/HomePageLayout/Home";
import Home from "../Layout/HomePageLayout/Home";
import MainColumn from "../Pages/Home/MainColumn/MainColumn";
import LogIn from "../Pages/LogIn/LogIn";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LogIn />,
    },
    {
        path: '/home',
        element: <HomePageLayout/>,
        children: [
            {
                path: '/home',
                element: <MainColumn/>
            },
            {
                path: '/home/friends',
                element: <Friends/>
            }
        ]
    },
    {
        path: '/myProfile',
        element: <MyProfile />
    }
])