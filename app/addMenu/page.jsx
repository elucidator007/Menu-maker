'use client'
import React, { useState } from 'react';
import { MENU_OPTIONS } from '@/utility/constant';
import InputType from '@/components/InputType';
import { Button } from '@/components/ui/button';
import { BellIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons"
import ItemList from '@/components/ItemList';

const Addmore = () => {
  const [formData, setFormData] = useState({});
  const [items, setItems] = useState([]);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, formData]);
    setFormData({}); // Clear the form after adding the item
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='bg-[#F05454] flex justify-center items-center text-[#121212] py-10 text-2xl font-bold leading-6'>Add Items Below</div>
      <div className='flex flex-row flex-1 m-5 h-full'>
        {/* Add Menu form */}
        <div className='flex flex-col w-1/2 px-5 overflow-y-auto h-full'>
          <h2 className='text-[#30475E] text-2xl mb-5'>Add Items</h2>
          <form onSubmit={handleAddItem} className='flex flex-col overflow-y-auto h-full px-5'>
            {MENU_OPTIONS.map((item) => (
              <div key={item.name} className='mb-4'>
                <div className='text-[#30475E] font-mono font-light text-sm leading-6'>{item.label}</div>
                <InputType
                  inputType={item.type}
                  inputPlaceholder={item.placeholder}
                  inputOptions={item.options ?? []}
                  inputValue={formData[item.name] || ''}
                  onChange={(value) => handleChange(item.name, value)}
                />
              </div>
            ))}
            <Button type="submit">Add Item</Button>
          </form>
        </div>
        {/* Items added list */}
        <div className='px-5 w-1/2 overflow-y-auto h-full'>
          <h2 className='text-[#30475E] text-2xl'>Items</h2>
          <ItemList items={items}/>
        </div>
      </div>
    </div>
  );
};

export default Addmore;
