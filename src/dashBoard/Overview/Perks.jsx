import React from 'react'
import { SiRotaryinternational } from "react-icons/si";
import { TbTimeDurationOff } from "react-icons/tb";
import { MdOutlineSyncProblem } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import { MdNoMealsOuline } from "react-icons/md";
import { AiFillMacCommand } from "react-icons/ai";
import { FaHourglassStart } from "react-icons/fa";


const Perks = ({ selected, onChange }) => {
    return (
        <div className='my-y'>
            <h2 className='font-bold'>Perks</h2>
            <div className='grid mt-2 w-full px-4 py-4 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-gray-100'>

                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <SiRotaryinternational />
                        <span>Country</span>
                    </label>
                    <input type="text" placeholder='Country' className='rounded py-2 w-full' />
                </div>
                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <TbTimeDurationOff />
                        <span>Duration</span>
                    </label>
                    <input type="text" placeholder='Duration' className='rounded py-2 w-full' />
                </div>
                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <MdOutlineSyncProblem />
                        <span>Difficulty</span>
                    </label>
                    <input type="text" placeholder='Difficulty' className='rounded py-2 w-full' />
                </div>

                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <MdLocalActivity />
                        <span>Activity</span>
                    </label>
                    <input type="text" placeholder='Activity' className='rounded py-2 w-full' />
                </div>

                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <FaMountain />
                        <span>Altitude</span>
                    </label>
                    <input type="text" placeholder='altitude' className='rounded py-2 w-full' />
                </div>

                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <MdNoMealsOuline />
                        <span>Meals</span>
                    </label>
                    <input type="text" placeholder='meals' className='rounded py-2 w-full' />
                </div>
                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <AiFillMacCommand />
                        <span>Accomodation</span>
                    </label>
                    <input type="text" placeholder='Accomodation' className='rounded py-2 w-full' />
                </div>
                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <AiFillMacCommand />

                        <span>Include</span>
                    </label>
                    <input type="text" placeholder='Accomodation' className='rounded py-2 w-full' />
                </div>
                <div className='border p-2'>
                    <label className='flex items-center gap-2  pointer'>
                        <FaHourglassStart />

                        <span>Points</span>
                    </label>
                    <input type="text" placeholder='start/end points' className='rounded py-2 w-full' />
                </div>

                <label className='border p-4 flex rounded-2xl gap-2 items-center pointer'>
                    <div>

                    </div>
                    <input type="text" placeholder='accomodation' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <span>Meals</span>

                </label>


            </div>

        </div>
    )
}

export default Perks