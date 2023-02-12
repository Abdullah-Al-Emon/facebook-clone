import { createBrowserRouter } from "react-router-dom";
import Friends from "../Pages/Friends/Friends";
import MainColumn from "../Pages/Home/MainColumn/MainColumn";
import LogIn from "../Pages/LogIn/LogIn";
import HomePageLayout from "../Layout/HomePageLayout/HomePageLayout";
import Groups from "../Pages/Groups/Groups";
import MyProfilePost from "../Pages/MyProfilePost/MyProfilePost";
import About from "../Pages/About/About";
import MyProfileLayoutPage from "../Layout/MyProfileLayoutPage/MyProfileLayoutPage";
import MyProfileFriends from "../Pages/MyProfileFriends/MyProfileFriends";

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
            },
            {
                path: '/home/groups',
                element: <Groups/>
            }
        ]
    },
    {
        path: '/myProfile',
        element: <MyProfileLayoutPage/>,
        children: [
            {
                path: '/myProfile',
                element: <MyProfilePost/>
            },
            {
                path: '/myProfile/friends',
                element: <MyProfileFriends/>
            },
            {
                path: '/myProfile/about',
                element: <About/>
            }
        ]
    }
])