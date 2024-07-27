import React from 'react'
import { BellIcon, Cross2Icon } from "@radix-ui/react-icons"

const ItemList = ({items}) => {
  return (
    <div>
      <ul>
            {items.map((item, index) => (
                <li key={index} className='my-3'>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        {item.fooditem}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Rs. {item.price}
                    </p>
                    <p>
                        {item.details}
                    </p>
                    </div>
                    <Cross2Icon />
                </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList
