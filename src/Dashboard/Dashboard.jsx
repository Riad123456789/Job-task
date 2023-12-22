import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";





const Dashboard = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="grid grid-cols-7 md:gap-2  lg:gap-4 lg:grid-cols-12 md:p-7 lg:p-9 bg-black  	 border">




            <div className="col-span-2  lg:col-span-2 bg-slate-900 md:rounded-lg border">
              
                <ul className=" ml-1 mt-11 mb-[500px] md:ml-8">
                    <div className=" mb-8">
                        <div className="ml-6 lg:ml-12">
                            {
                                user?.photoURL ?

                                    <div className="avatar border p-1 rounded-full">
                                        <div className="w-9 md:w-12 rounded-full ">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>

                            }
                        </div>
                        <div className="text-purple-600 md:text-center text-xs ml-2 md:mr-14 pt-2">
                            {
                                user?.displayName ?
                                    <p>{user?.displayName}</p>
                                    :
                                    ''
                            }
                        </div>
                        <div className="text-orange-500 text-xs hidden md:block md:ml-5 pt-1">
                            {
                                user?.email
                                ?
                                    <p>{user?.email}</p>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    <NavLink to={'/'}><li className=" text-white text-xs md:text-base">HOME</li></NavLink>
                    <NavLink to={'/dashboard/createTask'}><li className="pt-3 text-white text-xs md:text-base">CREATE TASKS </li></NavLink>
                    <NavLink to={'previousTask'}><li className="pt-3 text-white text-xs md:text-base">PREVIOUS TASKS </li></NavLink>
                    <NavLink to={'handleTask'}><li className="pt-3 text-white text-xs md:text-base">HANDLE TASK</li></NavLink>
                    <NavLink to={'Notifications'}><li className=" pt-3 text-white text-xs md:text-base">Notifications</li></NavLink>
                </ul>

            </div>
            <div className="col-span-5 lg:col-span-10 bg-slate-900  md:rounded-lg  border ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;