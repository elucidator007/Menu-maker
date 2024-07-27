'use client'
import React, { useState } from 'react'
import { MENU_SECTION_OPTIONS } from '@/utility/constant'

const Leftnav = ({ selectedSection, selectSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={`relative w-${isCollapsed ? '25' : '1/6'} h-screen bg-[#EEF0E5] text-[#163020] flex flex-col p-4 overflow-y-auto transition-all duration-300`}>
      <button
        onClick={handleToggle}
        className="absolute top-4 right-4 text-[#163020] bg-[#163020] p-2 rounded-md focus:outline-none"
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div className="flex flex-col mt-12">
          {MENU_SECTION_OPTIONS.map(section => (
            <div 
              key={section.value} 
              onClick={() => selectSection(section.value)}
              className={`py-2 px-4 my-2 cursor-pointer rounded ${
                selectedSection === section.value ? 'bg-[#B6C4B6] text-[#163020]' : 'hover:bg-[#B6C4B6]'
              }`}
            >
              {section.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Leftnav
