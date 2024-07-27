import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col justify-center items-center h-3/5 bg-[#F05454]'>
        <h1 className='font-dosis text-7xl font-medium text-[#F5F5F5]'>MenuForge</h1>
        <h3 className='text-[#30475E] italic text-2xl mt-3'>Design, Scan, Serve: Effortless Dining Experience.</h3>
      </div>
      <div className='flex flex-row gap-5 justify-center items-center h-2/5'>
        <Button>View Scanner</Button>
        <Link href='/addMenu'><Button>Add Menu</Button></Link>
        <Button>Edit Menu</Button>
        <Link href='/viewMenu'><Button>View Menu</Button></Link>
        <Link href='/registerHotel'><Button>Register Hotel</Button></Link>
      </div>
    </div>
  )
}

export default Homepage
