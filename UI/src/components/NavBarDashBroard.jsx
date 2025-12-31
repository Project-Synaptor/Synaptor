import React from 'react'
import { ArrowLeft } from 'lucide-react';
const NavBarDashBroard = () => {
    return (
        <div className='w-full h-[100px] text-white flex justify-between items-center'>
            <div className='text-white flex gap-3.5 items-center'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left bg-[#1b2233] text-[#89919f] p-2 rounded-[5px]"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </a>
                <h1 className='text-[30px] flex flex-col font-bold'>Neural Dashboard<span className='text-[18px] font-normal text-gray-300'>Welcome back, Student_01</span></h1>
            </div>
            <div>
                <a href="#" className='bg-[#6b26d9] p-2.5 rounded-[7px] w-[200px] h-[50px] flex justify-evenly font-bold items-center'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap mr-2.5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Resume Learning </a>
            </div>
        </div>
    )
}

export default NavBarDashBroard
