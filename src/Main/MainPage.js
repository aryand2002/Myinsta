import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Used to link routes and show content dynamically
import ReelsIcon from './Image/clapper.png';  // Adjust the path for the Reels icon as needed

function MainPage() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-48 h-screen fixed top-0 left-0 border-r border-[#bcbcba] p-4">
                <h1 className="font-bold text-[20px] mb-6">Instagram</h1>
                <ul className="flex flex-col gap-2">
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <Link to="/"><i className="fa-solid fa-house mr-2 text-[1rem]"></i>Home</Link>
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass mr-2 text-[1rem]"></i>Search
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-regular fa-compass mr-2 text-[1rem]"></i>Explore
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <Link to="/reels"><img src={ReelsIcon} alt="Reels" className="inline-block w-5 h-5 mr-2" />Reels</Link>
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-brands fa-facebook-messenger mr-2 text-[1rem]"></i>Message
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-regular fa-heart mr-2 text-[1rem]"></i>Notification
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-regular fa-square-plus mr-2 text-[1rem]"></i>Create
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <Link to="/profile"><i className="fa-solid fa-user mr-2 text-[1rem]"></i>Profile</Link>
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-brands fa-threads mr-2 text-[1rem]"></i>Threads
                    </li>
                    <li className='text-[.8rem] w-40 h-10 pl-[8px] pt-[11px] hover:bg-[#f1eded] rounded-md cursor-pointer'>
                        <i className="fa-solid fa-bars mr-2 text-[1rem]"></i>More
                    </li>
                </ul>
            </aside>

            {/* Content Area */}
            <div className="flex-1 ml-48 p-6 overflow-hidden">
                <Outlet /> {/* Render dynamic content here */}
            </div>
        </div>
    );
}

export default MainPage;
