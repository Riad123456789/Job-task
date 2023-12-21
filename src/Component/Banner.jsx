import img from '../assets/0c5d27821b87ad9913ac7c617e9faac06afe1d9e-1200x500.webp'

const Banner = () => {
    return (
 
            <div className=''>
                <div className="relative">
                    <img className="w-full h-[70vh]  md:h-[91vh]" src={img} alt="" />
                </div>

                <div className='absolute left-[2%] top-[38%] md:left-[10%] md:top-[53%]  lg:left-[11%] lg:top-[47%] space-y-2 lg:space-y-5  '>

                    <p  style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }} className='bg-gradient-to-r from-[#e12e2e] to-[#dc0b9a] font-extrabold text-center  md:text-2xl lg:text-5xl  text-xl '>Organize it All</p>
                    <p style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}  className='bg-gradient-to-r text-sm from-[#aa2424] to-[#d1cb0d] font-semibold lg:text-2xl text-center'>with TaskManager</p>
                    <button style={{borderRadius:'15px 5px 15px 5px'}} className="ml-10 lg:ml-28 border-b-fuchsia-700  border-b-4  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  ">
                        <span className="relative px-2 font-bold lg:px-10 lg:py-2.5 transition-all ease-in duration-75 
                        bg-gradient-to-r from-[#ff3ea8] to-[#fbc411] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           Let’s Explore
                        </span>
                    </button>
                </div>
            </div>
      
    );
};

export default Banner;