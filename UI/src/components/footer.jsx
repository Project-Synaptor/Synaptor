import React from 'react'
import { Brain } from "lucide-react";
const Footer = () => {
    return (
        <div className='text-white w-full h-25 border-t border-white/10 p-6 flex items-center justify-between'>
            <div className="flex items-center gap-2 text-gray-400 text-[20px] font-semibold ">
                <Brain className="text-gray-400" size={20} />
                Synaptor
            </div>
            <div className='text-gray-400'>
                <p>© 2025 Synaptor Learning Systems. Built for the Future of Education.</p>
            </div>
        </div>
    )
}

export default Footer
