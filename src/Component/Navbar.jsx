import { NavLink } from "react-router-dom";
// import { BiLogoFacebook } from "react-icons/bi";
// import { SlSocialTwitter } from "react-icons/sl";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { MdPhoneForwarded } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const NavLinks = <>
        <NavLink to={'/'}>  <li className="font-serif text-white "><a>HOME</a></li></NavLink>
        <NavLink>  <li className="font-serif text-white "><a>ABOUT</a></li></NavLink>
        <NavLink to={'/register'}>  <li className="font-serif text-white "><a>CONTACT</a></li></NavLink>
       {
        user?  <NavLink to={'/dashboard/createTask'}>  <li className="font-serif text-white "><a>DASHBOARD</a></li></NavLink>
        :
        ""
       }
    </>


    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    };

    console.log(user)
    return (
        <>
            {/* <div className="  md:flex justify-between px-5 bg-gradient-to-r from-[#65205a] to-[#3c0480]">
                <div className=" hidden md:flex text-slate-300 text-xs font-semibold">
                 
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-2 border-l-2">ABOUT</p>
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-3 border-x-2">FAQ</p>
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2">CONTACT</p>
                </div>
                <div className="flex items-center  text-slate-300 text-xs font-semibold ">
                    <div className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 flex items-center  gap-1">
                        <MdPhoneForwarded size={15}></MdPhoneForwarded>
                        +8801756660368</div>
                    <div className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 border-l-2 flex items-center px-3 gap-1">
                        <MdOutlineEmail size={15}></MdOutlineEmail>
                        Riad80817@gmail.com
                    </div>
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 border-x-2">
                        <BiLogoFacebook size={14}></BiLogoFacebook></p>
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 ">
                        <SlSocialTwitter size={14}></SlSocialTwitter ></p>
                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 border-l-2">
                        <FaWhatsapp size={14}></FaWhatsapp></p>
                </div>
            </div> */}
            <div className="navbar bg-gradient-to-r from-[#ff3ea8] to-[#480087]   pr-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg md:text-xl text-white">Task Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    {
                        user?.photoURL ?

                            <div className="avatar border p-1 rounded-full">
                                <div className="w-9 rounded-full ">
                                    <img  src={user?.photoURL} />
                                </div>
                            </div>
                            :
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                    }
                    <div className="pl-2">
                        {
                            user ? <button onClick={handleLogout} className="btn btn-sm btn-outline border text-white">SING OUT</button>
                                :
                                // 
                                ""
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;