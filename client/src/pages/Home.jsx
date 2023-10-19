
import { Line } from "react-chartjs-2";
import HomeLayout from "../layouts/HomeLayout";
import { Link } from "react-router-dom";
import homePageMainImage from '../assets/image/homePageMainImage.png'

function Home() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold ">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                    <p className="text-xl text-gray-200">we have a large of courses tought by highly skilled and qualified at a very affordable cose.</p>


                    <div className="space-x-6">
                        <Link to='/course'>
                            <button className="bg-yellow-500  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Explore Courses</button>
                        </Link>
                        <Link to='/contact'>
                            <button className= "border border-yellow-500  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Contact Us</button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                 <img src={homePageMainImage} alt="home page" />
                </div>

            </div>
        </HomeLayout>
    )
}
export default Home;