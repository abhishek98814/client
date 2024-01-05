import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { AiTwotoneHighlight } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { IoBagAdd } from "react-icons/io5";
import { BsExclude } from "react-icons/bs";
import { IoIosGitPullRequest } from "react-icons/io";
import { ImSection } from "react-icons/im";

const Sidebar = () => {

    const [showTrek, setShowTrek] = useState(false);
    const [addTrek, setAddTrek] = useState(false)

    const toggleDetails = () => {
        setShowTrek(!showTrek);
    };
    const addTrekss = () => {
        setAddTrek(!addTrek)
    }

    let { dash } = useParams()

    if (dash === undefined) {
        dash = "dash/overview"
    }




    return (
        <div className="bg-blue-800  w-1/6  text-white flex flex-col">
            <h2 className='px-8 py-4 bg-gray-400  font-bold'>Dashboard</h2>
            <div className="my-0 flex flex-col">
                <div>
                    <h2
                        className='flex px-6 items-center bg-blue-700 py-2 gap-2 my-4'
                        onClick={toggleDetails}
                    >
                        Trek
                        <IoMdArrowDropdown />
                    </h2>

                    {showTrek && (
                        <div>
                            <ul className='items-center justify-center'>
                                <li className=' px-4 flex my-2 gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                    </svg>
                                    <Link>All Trek</Link>
                                </li>

                                <li className=' px-4 my-2 flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>

                                    <Link>Add Category</Link>
                                </li>
                                <li className=' px-4 my-2 flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <Link>Loacation</Link>
                                </li>
                                <li className=' px-4 my-2 flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>

                                    <Link>Booking</Link>
                                </li>
                                <li className=' px-4 my-2 flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>

                                    <Link>Inquiry</Link>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>


                <div>
                    <h2 onClick={addTrekss} className='flex px-6 items-center bg-blue-700 py-2 gap-2 my-2'>
                        Trips
                        <IoMdArrowDropdown />
                    </h2>

                    {addTrek &&
                        (
                            <ul className='my-0'>

                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <ImSection />
                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        Add Trek
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <ImSection />
                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        All  Trek
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <RiGalleryFill />
                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        Gallery
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <GrOverview />

                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        Trip Overview
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <BsExclude />
                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        Inclox
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <AiTwotoneHighlight />
                                    <Link to="/dash/overview" className='py-1 rounded-md'>
                                        Iternary
                                    </Link>
                                </li>
                                <li className="my-1 gap-2 flex px-4 items-center">
                                    <IoIosGitPullRequest />
                                    <NavLink to="/dash/overview" className='py-1 rounded-md'>
                                        FaQs
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                </div>
            </div >
        </div >

    );
};

export default Sidebar;
