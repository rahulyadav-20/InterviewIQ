import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'motion/react'
import { BsRobot, BsCoin } from 'react-icons/bs'

function Navbar() {
  const { userData } = useSelector((state) => state.user)

  return (
    <div className='flex justify-center bg-[#f3f3f3] px-4 pt-6'>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='relative flex w-full max-w-6xl items-center justify-between rounded-[24px] border border-gray-200 bg-white px-8 py-4 shadow-sm'
      >
        <div className='flex items-center gap-3'>
          <div className='rounded-lg bg-black p-2 text-white'>
            <BsRobot size={18} />
          </div>
          <h1 className='text-lg font-semibold text-gray-900'>InterviewIQ.AI</h1>
        </div>

        <div className='flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700'>
          <BsCoin size={18} />
          <span>{userData?.credits || 0} credits</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
