import Banner from "../Component/Banner";
import Foother from "../Component/Foother";
import Navbar from "../Component/Navbar";


const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <Foother></Foother>

        </div>
    );
};

export default MainLayout;