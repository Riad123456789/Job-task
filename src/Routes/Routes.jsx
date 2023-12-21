import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import RegisterForm from "../Contactinform/RegisterForm";
import LoginForm from "../Contactinform/LoginForm";



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
    }
]);


export default router