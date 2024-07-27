// RegisterHotel.jsx
'use client';
import React, { useState } from 'react';
import { SIGNUP_OPTIONS } from '@/utility/constant';
import InputType from '@/components/InputType';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const RegisterHotel = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted');
  };

  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='w-full p-9'>
        <form onSubmit={handleFromSubmit}>
          {SIGNUP_OPTIONS.map(signUp_Que => (
            <div key={signUp_Que.name}>
              <label className='block text-gray-700'>{signUp_Que.label}</label>
              <InputType
                inputType={signUp_Que.type}
                inputPlaceholder={signUp_Que.placeholder}
                inputOptions={signUp_Que.options ?? []}
                inputValue={formData[signUp_Que.name] || ''}
                onChange={(value) => handleChange(signUp_Que.name, value)}
              />
            </div>
          ))}
          <Button type='submit'>Register</Button>
        </form>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={500}
        alt="Picture of the hotel"
      />
    </div>
  );
};

export default RegisterHotel;
