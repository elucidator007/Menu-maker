'use client'
import React, { useState, useEffect } from 'react'
import { MENU_SECTION_OPTIONS } from '@/utility/constant'
import Leftnav from './Leftnav'
import MenuItems from './MenuItems'

const ViewPage = () => {
    const [selectedSection, setSelectedSection] = useState(MENU_SECTION_OPTIONS[0].value)

    const selectSection = (selSection) => {
        setSelectedSection(selSection)
    }

    return (
        <div className='flex flex-row'>
            <Leftnav selectSection={selectSection} />
            <MenuItems selectedSection={selectedSection} />
        </div>
    )
}

export default ViewPage