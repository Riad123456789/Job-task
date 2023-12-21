import Foother from "../Component/Foother";
import Navbar from "../Component/Navbar";
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const RegisterForm = () => {


    const HandelSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, password, email, photo)

    }


    return (
        <div className="bg-gradient-to-r from-[#6f2094] to-[#dc0b9a]">
            <Navbar></Navbar>
            <div>
                <div className='flex  my-6  bg-gradient-to-r from-[#6f2094] to-[#dc0b9a]  justify-center items-center min-h-screen'>
                    <div className='flex px-10 border shadow-lg shadow-orange-500  flex-col max-w-md  rounded-md sm:p-10  text-gray-900'>
                        <div className='mb-8 text-center'>
                            <h1 className=' text-4xl font-bold'>Sign Up</h1>
                        </div>
                        <form
                            onSubmit={HandelSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image:
                                    </label>
                                    <input
                                        required
                                        type='file'
                                        id='image'
                                        name='photo'
                                        accept='image/*'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Enter Your Email Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='text-sm mb-2'>
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        type='password'
                                        name='password'
                                        autoComplete='new-password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='bg-red-700 w-full rounded-md py-3 text-white'
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />
                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 py-2 text-sm text-center text-black'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='hover:underline  text-white'
                            >
                                Login
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
            <Foother></Foother>
        </div>
    );
};

export default RegisterForm;