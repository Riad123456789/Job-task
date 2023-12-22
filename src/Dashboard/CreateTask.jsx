import { useState } from "react";
import { GetTask } from "../api/AllTask";
import toast from "react-hot-toast";


const CreateTask = () => {

    const [Data, setdata] = useState('')

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const titles = form.titles.value
        const descriptions = form.descriptions.value
        const deadlines = form.deadlines.value

        const AllTask = {

            Titles: titles,
            Descriptions: descriptions,
            Deadlines: deadlines,
            priority: Data,
            Statas: "todo"
        }

        console.log(AllTask)


        try {
            await GetTask(AllTask)
            toast.success('success')
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div className='text-white'>
            <div className="w-full lg:my-16 m-auto max-w-3xl p-4  border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 shadow-yellow-500 ">
                <form onSubmit={HandleSubmit} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-white dark:text-white">ADD YOUR TASK</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white"> TITLES :</label>
                        <input name="titles" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">DESCRIPTION :</label>
                        <input name="descriptions" id="descriptions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">deadlines :</label>
                        <input type="date" name="deadlines" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="w-full ">
                        <select onChange={(e) => setdata(e.target.value)} className="select select-error w-full  text-black">
                            <option disabled selected>Select priority</option>
                            <option>Low</option>
                            <option>moderate</option>
                            <option>high </option>
                        </select>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">


                        </div>

                    </div>
                    <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>

            </div>
        </div>
    );
};

export default CreateTask;