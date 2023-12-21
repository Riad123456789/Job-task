import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import RegisterForm from "../Contactinform/RegisterForm";
import LoginForm from "../Contactinform/LoginForm";
import Dashboard from "../Dashboard/Dashboard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

        ]
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
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
]);


export default router