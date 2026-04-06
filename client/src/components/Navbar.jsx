import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from "motion/react"

function Navbar() {
    const { userData } = useSelector((state) => state.user)

    return (
        <div className='bg-[#f3f3f3] flex justify-center px-4 pt-6'>
            <motion.div
            initial= {{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.3}}
            className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative'>
                
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white'>
                        IQ
                    </div>
                    <h1 className='text-lg font-semibold text-gray-900'>InterviewIQ.AI</h1>
                </div>
                
            </motion.div>
        </div>
    )
}

export default Navbar
