import { FcGoogle } from 'react-icons/fc'
import Navbar from '../Component/Navbar';
import Foother from '../Component/Foother';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gettoken, saveuser } from '../api/auth';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const LoginForm = () => {


    const { signIn, signInWithGoogle, } = useContext(AuthContext)
    const Navigate = useNavigate()
    const Location = useLocation();

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get('email')
        const password = data.get('password')

        try {
            const result = await signIn(email, password)
            await saveuser(result?.user)
            await gettoken(result?.user?.email)
            toast.success('success')
            Navigate( "/")

        } catch (error) {
            console.log(error)
        }
    };

    const HandleGoogle = async (e) => {

        e.preventDefault()
        try {
            const result = await signInWithGoogle()
            await saveuser(result?.user)
            await gettoken(result?.user?.email)
            toast.success('success')
            Navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='bg-gradient-to-r from-[#6f2094] to-[#dc0b9a]'>
            <Navbar></Navbar>

            <div className="w-full my-24 m-auto max-w-sm p-4  border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 shadow-yellow-500 ">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email :</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password :</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-black hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={HandleGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />
                    <p>Continue with Google</p>
                </div>
                <div className="text-sm font-medium text-black dark:text-gray-300">
                    Not registered? <Link to={'/register'} className="text-white hover:underline dark:text-blue-500">Create account</Link>
                </div>
            </div>
            <Foother></Foother>

        </div>
    );
};

export default LoginForm;