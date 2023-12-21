import { Link } from "react-router-dom";





const Dashboard = () => {



    return (
        <div className="grid grid-cols-7 md:gap-2  lg:gap-4 lg:grid-cols-12 md:p-7 lg:p-9 bg-black  	 border">

            <div className="col-span-2  lg:col-span-2 bg-slate-900 md:rounded-lg border">
                <ul className="space-y-5 ml-1 mt-11 mb-[500px] md:ml-8">
                    <Link to={'/'}><li className="text-white text-xs md:text-base">HOME</li></Link>
                    <li className="text-white text-xs md:text-base">CREATE TASKS </li>
                    <li className="text-white text-xs md:text-base">PREVIOUS TASKS </li>
                    <li className="text-white text-xs md:text-base">HANDLE TASK</li>
                </ul>

            </div>
            <div className="col-span-5 lg:col-span-10 bg-slate-900  md:rounded-lg  border ">

            </div>
        </div>
    );
};

export default Dashboard;