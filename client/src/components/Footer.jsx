import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='bg-[#f3f3f3] flex justify-center px-4 py-4 pb-10 pt-10'>
      <div className='w-full max-w-6xl rounded-[24px] border border-gray-200 bg-white px-3 py-8 text-center shadow-sm'>
        <div className='flex justify-center items-center gap-3'>
          <div className='bg-black text-white p-2 rounded-lg'>
            <BsRobot size={16} />
          </div>
          <h2 className='semi-semibold'>InterviewIQ.AI</h2>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto'>
          AI-powered interview preparation Platform designed to improve communicaton skills, technical depth and profressional confidence.
        </p>
      </div>
    </footer>
  )
}

export default Footer
