import { useEffect, useState } from 'react';
import { Bars3BottomRightIcon, SunIcon } from '@heroicons/react/24/solid';
import { IconSideBar } from '../../components/Icons';

export default function Sidebar({ navigations, children, header, description }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const routePath = window.location.pathname;

    return (
        <div className="flex flex-col justify-between md:flex-row">
            {/* Sidebar */}
            <aside
                className={`hidden md:flex fixed min-h-screen flex-col items-center justify-start gap-6 border-[1px] border-r-slate-200 bg-white transition-all duration-200 ${isSidebarOpen ? 'w-16 md:w-[300px]' : 'w-0 md:w-24'}`}
            >
                <div className="flex w-full justify-center border-b py-6 text-[24px] font-bold text-[#0F114C] border-b-slate-200 border-[1px]">
                    STKI <span className={`${isSidebarOpen ? 'text-[#264A9D] ml-2' : 'hidden'}`}>2025</span>
                </div>
                <img
                    src={`${window.location.origin}/images/image_for_sidebar.png`}
                    alt="Profile"
                    className={`${isSidebarOpen ? 'h-[111px] w-[90px]' : 'h-[50px] w-[50px]'}`}
                />
                <nav className={`mt-1 w-full ${isSidebarOpen ? 'px-5' : ''} text-center`}>
                    <ul className="font-bold">
                        {navigations.map((navigation, i) => {
                            let routePath = window.location.pathname;
                            const routeName = navigation.link.startsWith("http")
                                ? new URL(navigation.link).pathname
                                : navigation.link;

                            const isActive = routePath === routeName;

                            return (
                                <li
                                    key={i}
                                    className={`py-4 flex flex-col justify-center ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} ${isActive ? 'bg-[#0F114C] text-white' : 'hover:bg-[#0F114C]/20 transition-all duration-200'}`}
                                >
                                    {isActive && isSidebarOpen && (
                                        <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#264A9D]"></div>
                                    )}
                                    <a
                                        href={navigation.link}
                                        className="flex flex-row items-center gap-5 text-[14px] font-semibold tracking-[0.3px]"
                                        onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
                                    >
                                        {navigation.icon} {isSidebarOpen && navigation.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {/* Overlay for mobile */}
            {isSidebarOpen && window.innerWidth < 768 && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar mobile */}
            <aside
                className={`fixed left-0 top-0 z-50 h-full w-full transform bg-white transition-transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between border-b p-5">
                    <span className="text-xl font-bold text-[#0F114C]">ITCC <span className="text-[#264A9D]">2025</span></span>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <Bars3BottomRightIcon className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <nav className="mt-5 text-center">
                    <ul className="font-bold">
                        {navigations.map((navigation, i) => {
                            let routePath = window.location.pathname;
                            const routeName = navigation.link.startsWith("http")
                                ? new URL(navigation.link).pathname
                                : navigation.link;

                            const isActive = routePath === routeName;

                            return (
                                <li
                                    key={i}
                                    className={`py-4 flex flex-col justify-center ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} ${isActive ? 'bg-[#0F114C] text-white' : 'hover:bg-[#0F114C]/20 transition-all duration-200'}`}
                                >
                                    {isActive && isSidebarOpen && (
                                        <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#264A9D]"></div>
                                    )}
                                    <a
                                        href={navigation.link}
                                        className="flex flex-row items-center gap-5 text-[14px] font-semibold tracking-[0.3px]"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        {navigation.icon} {isSidebarOpen && navigation.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 ${isSidebarOpen ? 'ml-0 md:ml-[300px]' : 'ml-0 md:ml-24'} overflow-x-auto transition-all`}>
                <header className="flex w-full items-center px-3 py-[1.68rem] justify-between md:px-14">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                        {!isSidebarOpen ? <Bars3BottomRightIcon className="w-6 h-6 text-[#000000]" /> : <IconSideBar />}
                    </button>
                    <SunIcon className="w-8 h-8 text-yellow-300" />
                </header>

                <div className="flex min-h-screen flex-col gap-1 bg-[#E6EFF5] px-4 py-2 md:px-14 md:py-5 md:mt-0 pt-10">
                    <p className='text-3xl font-semibold leading-tight text-gray-800'>{header}</p>
                    <p className='text-[17px] text-gray-500'>{description}</p>
                    {children}
                </div>
            </div>
        </div>
    );
}
