import React from 'react'
import { DATA_DUMP } from '@/utility/dataDump'
import Card from '@/components/grid'

const MenuItems = ({ selectedSection }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {DATA_DUMP.filter(item => item.section === selectedSection).map(item => (
        <div key={item.foodItem} className="py-2">
          {item.foodItem}
          <Card 
            imageSrc = 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title = {item.foodItem}
            text = {item.details}
            linkHref = 'qweqw'
            linkText = 'qweqw'
        />
        </div>
      ))}
      {/* <Card 
        imageSrc = 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title = 'qw'
        text = 'qqwe'
        linkHref = 'qweqw'
        linkText = 'qweqw'
      /> */}
    </div>
  )
}

export default MenuItems
