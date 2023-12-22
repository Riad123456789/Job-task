import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import RegisterForm from "../Contactinform/RegisterForm";
import LoginForm from "../Contactinform/LoginForm";
import Dashboard from "../Dashboard/Dashboard";
import CreateTask from "../Dashboard/CreateTask";
import PreviousTask from "../Dashboard/PreviousTask";
import HandleTask from "../Dashboard/HandleTask";
import Notifications from "../Dashboard/Notifications";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path: '/register',
        element: <RegisterForm></RegisterForm>
    },
    {
        path: '/login',
        element: <LoginForm></LoginForm>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: 'previousTask',
                element: <PreviousTask></PreviousTask>
            },
            {
                path: 'handleTask',
                element: <HandleTask></HandleTask>
            },
            {
                path: 'Notifications',
                element: <Notifications></Notifications>
            },
        ]
    },

]);


export default router