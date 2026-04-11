import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'motion/react'
import { BsCoin, BsRobot } from 'react-icons/bs'
import { FaUserAstronaut } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { ServerUrl } from '../App'
import { setUserData } from '../redux/userSlice'

function Navbar() {
  const { userData } = useSelector((state) => state.user)
  const [showCreditPopup, setShowCreditPopup] = useState(false)
  const [showUserPopup, setShowUserPopup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await axios.get(`${ServerUrl}/api/auth/logout`, { withCredentials: true })
      dispatch(setUserData(null))
      setShowCreditPopup(false)
      setShowUserPopup(false)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center bg-[#f3f3f3] px-4 pt-6'>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='relative flex w-full max-w-6xl items-center justify-between rounded-[24px] border border-gray-200 bg-white px-5 py-4 shadow-sm md:px-8'
      >
        <button
          onClick={() => navigate('/')}
          className='flex items-center gap-3'
        >
          <div className='rounded-lg bg-black p-2 text-white'>
            <BsRobot size={18} />
          </div>
          <h1 className='hidden text-lg font-semibold text-gray-900 md:block'>
            InterviewIQ.AI
          </h1>
        </button>

        <div className='flex items-center gap-3 md:gap-6'>
          <div className='relative'>
            <button
              onClick={() => {
                setShowCreditPopup(!showCreditPopup)
                setShowUserPopup(false)
              }}
              className='flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200'
            >
              <BsCoin size={18} />
              <span>{userData?.credits || 0}</span>
            </button>

            {showCreditPopup && (
              <div className='absolute right-0 z-50 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-5 shadow-xl'>
                <p className='mb-4 text-sm text-gray-600'>
                  Need more credits to continue interview?
                </p>
                <button
                  onClick={() => navigate('/pricing')}
                  className='w-full rounded-lg bg-black py-2 text-sm text-white'
                >
                  Buy more credits
                </button>
              </div>
            )}
          </div>

          <div className='relative'>
            <button
              onClick={() => {
                setShowUserPopup(!showUserPopup)
                setShowCreditPopup(false)
              }}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-black font-semibold text-white'
            >
              {userData?.name ? (
                userData.name.slice(0, 1).toUpperCase()
              ) : (
                <FaUserAstronaut size={16} />
              )}
            </button>

            {showUserPopup && (
              <div className='absolute right-0 z-40 mt-3 w-52 rounded-xl border border-gray-200 bg-white p-4 shadow-xl'>
                <p className='mb-3 text-sm font-medium text-blue-500'>
                  {userData?.name || 'Guest'}
                </p>

                <button
                  onClick={() => navigate('/history')}
                  className='w-full py-2 text-left text-sm text-gray-600 hover:text-black'
                >
                  Interview history
                </button>

                <button
                  onClick={handleLogout}
                  className='flex w-full items-center gap-2 py-2 text-left text-sm text-red-500'
                >
                  <HiOutlineLogout size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
