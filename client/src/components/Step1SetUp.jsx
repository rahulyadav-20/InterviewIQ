import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaBriefcase, FaFileUpload, FaLayerGroup, FaUserTie } from 'react-icons/fa'

function Step1SetUp({ onStart }) {
  const [formData, setFormData] = useState({
    role: 'Frontend Developer',
    experience: 'Fresher',
    type: 'Technical',
    resumeName: '',
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className='px-4 py-8 md:px-6 md:py-10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm md:grid-cols-2'
      >
        <div className='bg-gradient-to-br from-green-50 to-white p-8 md:p-10'>
          <div className='inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm text-green-700'>
            <FaLayerGroup size={14} />
            AI Interview Setup
          </div>
          <h2 className='mt-6 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl'>
            Prepare your mock interview in one clean step
          </h2>
          <p className='mt-4 max-w-lg text-sm leading-7 text-gray-500 md:text-base'>
            Choose your role, experience, and interview type before starting.
            This keeps the current UI style and fixes the missing setup screen.
          </p>

          <div className='mt-8 space-y-4'>
            {[
              'Role-based interview preparation',
              'Simple experience and mode selection',
              'Optional resume file indicator',
            ].map((item) => (
              <div
                key={item}
                className='rounded-2xl border border-green-100 bg-white px-4 py-4 text-sm text-gray-700 shadow-sm'
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className='p-8 md:p-10'>
          <div className='grid gap-5'>
            <label className='grid gap-2'>
              <span className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <FaBriefcase className='text-green-600' />
                Select Role
              </span>
              <select
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white'
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Software Engineer</option>
                <option>UI/UX Designer</option>
              </select>
            </label>

            <label className='grid gap-2'>
              <span className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <FaUserTie className='text-green-600' />
                Experience Level
              </span>
              <select
                value={formData.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white'
              >
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>
            </label>

            <div className='grid gap-2'>
              <span className='text-sm font-medium text-gray-700'>Interview Type</span>
              <div className='grid gap-3 sm:grid-cols-2'>
                {['Technical', 'HR'].map((type) => (
                  <button
                    key={type}
                    type='button'
                    onClick={() => handleChange('type', type)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                      formData.type === type
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className='font-medium'>{type}</div>
                    <p className='mt-1 text-xs opacity-80'>
                      {type === 'Technical'
                        ? 'Role-specific technical questions'
                        : 'Behavioral and communication round'}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <label className='grid gap-2'>
              <span className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <FaFileUpload className='text-green-600' />
                Resume Upload
              </span>
              <label className='flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-4 text-sm'>
                <div>
                  <div className='font-medium text-gray-800'>
                    {formData.resumeName || 'Upload resume PDF'}
                  </div>
                  <p className='mt-1 text-xs text-gray-500'>
                    Optional for now
                  </p>
                </div>
                <span className='rounded-full bg-black px-4 py-2 text-xs text-white'>
                  Choose file
                </span>
                <input
                  type='file'
                  accept='.pdf'
                  className='hidden'
                  onChange={(e) =>
                    handleChange('resumeName', e.target.files?.[0]?.name || '')
                  }
                />
              </label>
            </label>
          </div>

          <div className='mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-sm text-gray-500'>
              {formData.role} • {formData.experience} • {formData.type}
            </p>
            <button
              type='button'
              onClick={() => onStart(formData)}
              className='rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90'
            >
              Start Interview
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Step1SetUp
