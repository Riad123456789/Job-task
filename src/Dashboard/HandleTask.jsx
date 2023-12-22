import { useEffect, useState } from "react";
import { getAllTask } from "../api/AllTask";
import HandleTaskCard from "./TaskCard/HandleTaskCard";
import { DndProvider } from "react-dnd";




const HandleTask = () => {

    const [Data, setdata] = useState(null)
    useEffect(() => {
        try {
            getAllTask().then(data => {

                setdata(data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    // console.log(Data)



    return (

       
            <div>
                <div className='text-white  my-5 mx-3  md:mx-10 grid grid-cols-3 gap-1 md:gap-3' >



                    <div className="col-span-1 ">
                        <div className="bg-orange-300 flex justify-center rounded-md p-2 ">
                            <p className="text-xs md:text-2xl font-bold text-orange-900">To-do</p>
                        </div>
                    </div>



                    <div className="col-span-1 ">
                        <div className="bg-orange-300 flex justify-center rounded-md p-2">
                            <p className="text-xs md:text-2xl font-bold text-orange-900">Ongoing</p>
                        </div>
                    </div>

                    <div className="col-span-1 ">
                        <div className="bg-orange-300 flex justify-center rounded-md p-2 ">
                            <p className="text-xs md:text-2xl font-bold text-orange-900">Completed</p>
                        </div>
                    </div>

                </div>



                <div className='text-white mx-3   md:mx-10 grid grid-cols-3 gap-1 md:gap-3' >


                    <div className="col-span-1 border pb-[600px] md:pb-[700px] p-2  rounded-md ">
                      
                            <div >
                                {Data?.map(item => <HandleTaskCard key={item._id} item={item} ></HandleTaskCard>)}
                            </div>
                  
                    </div>

                    <div className="col-span-1 border rounded-md p-2 ">
                        <div className=" flex justify-center bg-sky-600 py-4 mb-2 rounded-md  ">
                            c
                        </div>
                    </div>


                    <div className="col-span-1 border rounded-md p-2">
                        {/* <div className=" flex justify-center bg-sky-600 py-4 rounded-md  ">
     c
    </div> */}
                    </div>

                </div>


            </div >


    );
};

export default HandleTask;