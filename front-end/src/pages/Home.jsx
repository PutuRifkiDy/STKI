import DashboardLayout from "../layouts/DashboardLayout";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
    return (
        <DashboardLayout
            title="Dashboard"
            header="Dashboard"
            description="This is our identity to fulfill the information retrieval project">
            <div className="grid md:grid-cols-2 justify-center items-center grid-cols-1 gap-28 pt-10 ">
                <div className="bg-[#0f114c] flex justify-center items-center flex-col rounded-[20px] px-5 py-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_#000000]">
                    <img src="/images/foto-candra.png" className="rounded-full w-24 h-24 object-cover mt-2 mb-10 border-2 border-white" alt="" />
                    <p className="text-[24px] text-white pt-2 font-semibold text-center">
                        Nyoman Candra Wikananta
                    </p>
                    <p className="text-[16px] text-white pt-2 font-semibold">
                        2305551065
                    </p>
                    <div className="flex flex-row gap-3 mt-5">
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaTwitter className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaInstagram className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaFacebook className="text-[20px]" />
                        </a>
                    </div>
                    <button className="outline-none border-2 border-white hover:bg-white px-5 py-2 text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out mt-4 rounded-[20px] font-semibold mt-16">
                        Contact Me
                    </button>
                </div>
                <div className="bg-[#0f114c] flex justify-center items-center flex-col rounded-[20px] px-5 py-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_#000000]">
                    <img src="/images/foto-devasya.png" className="rounded-full w-24 h-24 object-cover mt-2 mb-10 border-2 border-white" alt="" />
                    <p className="text-[24px] text-white pt-2 font-semibold text-center">
                        Putu Devasya Widyadana
                    </p>
                    <p className="text-[16px] text-white pt-2 font-semibold">
                        2305551071
                    </p>
                    <div className="flex flex-row gap-3 mt-5">
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaTwitter className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaInstagram className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaFacebook className="text-[20px]" />
                        </a>
                    </div>
                    <button className="outline-none border-2 border-white hover:bg-white px-5 py-2 text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out mt-4 rounded-[20px] font-semibold mt-16">
                        Contact Me
                    </button>
                </div>
                <div className="bg-[#0f114c] flex justify-center items-center flex-col rounded-[20px] px-5 py-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_#000000]">
                    <img src="/images/foto-rifki.png" className="rounded-full w-24 h-24 object-cover mt-2 mb-10 border-2 border-white" alt="" />
                    <p className="text-[24px] text-white pt-2 font-semibold text-center">
                        Putu Rifki Dirkayuda
                    </p>
                    <p className="text-[16px] text-white pt-2 font-semibold">
                        2305551068
                    </p>
                    <div className="flex flex-row gap-3 mt-5">
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaTwitter className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaInstagram className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaFacebook className="text-[20px]" />
                        </a>
                    </div>
                    <button className="outline-none border-2 border-white hover:bg-white px-5 py-2 text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out mt-4 rounded-[20px] font-semibold mt-16">
                        Contact Me
                    </button>
                </div>
                <div className="bg-[#0f114c] flex justify-center items-center flex-col rounded-[20px] px-5 py-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_#000000]">
                    <img src="/images/foto-tri.png" className="rounded-full w-24 h-24 object-cover mt-2 mb-10 border-2 border-white" alt="" />
                    <p className="text-[24px] text-white pt-2 font-semibold text-center">
                        Nyoman Tri Darma Wahyudi
                    </p>
                    <p className="text-[16px] text-white pt-2 font-semibold">
                        2305551052
                    </p>
                    <div className="flex flex-row gap-3 mt-5">
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaTwitter className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaInstagram className="text-[20px]" />
                        </a>
                        <a href="" className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full bg-[#03a9f4] hover:bg-[#ffffff] hover:shadow-[0_0_10px_#a9cdeb] text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out">
                            <FaFacebook className="text-[20px]" />
                        </a>
                    </div>
                    <button className="outline-none border-2 border-white hover:bg-white px-5 py-2 text-white hover:text-[#0f114c] transition-all duration-300 ease-in-out mt-4 rounded-[20px] font-semibold mt-16">
                        Contact Me
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Home;