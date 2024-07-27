'use client';
import React from 'react';
import { Input } from './ui/input';
import Select from 'react-select';
import ImageUpload from './Inputupload';

const InputType = ({ inputType, inputPlaceholder, inputOptions, inputValue, onChange }) => {
  if (inputType === 'number' || inputType === 'text') {
    return <Input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={(e) => onChange(e.target.value)} />;
  } else if (inputType === 'select') {
    return <div><Select options={inputOptions} value={inputOptions.find(option => option.value === inputValue)} onChange={(option) => onChange(option.value)} /></div>;
  } else if (inputType === 'image') {
    return <ImageUpload onImageUpload={(file) => onChange(file)} />;
  }
  return null;
};

export default InputType;
