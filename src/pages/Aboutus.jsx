import HomeLayout from "../layouts/HomeLayout";
import aboutMainImage from '../assets/image/aboutMainImage.png'
import steveJobs from '../assets/image/steveJobs.png'
import apj from '../assets/image/apj.png'
import billgates from '../assets/image/billGates.png'
import einstein from '../assets/image/einstein.png'
import nelsonMandela from '../assets/image/nelsonMandela.png'





function Aboutus() {
    return (

        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">

                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">

                        <h1 className="text-5xl text-yellow-500 font-semibold ">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200 ">

                            Our goal is to provide the affordable and quality education to the
                            world. We are providing the platform for the aspiring teachers and
                            students to share their creativity, skills and knowledge to each
                            other to empower and contribute in the growth and wellness of the
                            mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img src={aboutMainImage}
                            className="drop-shadow-2xl"
                            alt=" about main page"
                        />
                    </div>

                </div>
                <div className="carousel w-1/2 my-10 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-2xl text-gray-200">"Innovation distinguishes between a leader and a follower."</p>
                            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-2xl text-gray-200">"Learning gives creativity, creativity leads to thinking,
                        thinking provides knowledge, knowledge makes you great."</p>
                        <h3 className="text-2xl font-semibold">Apj Abdul kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={billgates} className="w-40 rounded-full border-2 border-gray-400l" />
                        <p className="text-2xl text-gray-200">"Technology is just a tool. In terms of getting the kids working
                        together and motivating them, the teacher is the most
                        important."</p>
                        <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-2xl text-gray-200">"Education is not the learning of facts, but the training of the
                        mind to think."</p>
                        <h3 className="text-2xl font-semibold">Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}
export default Aboutus;