export const SIGNUP_OPTIONS = [
    {
        label : 'Hotel Name',
        name : 'hotelName',
        placeholder : 'Please Enter your name',
        type : 'text'
    },
    {
        label : 'Hotel tagline',
        name : 'hotelTagline',
        placeholder : 'Please Enter your Hotel Tagline',
        type : 'text'
    },
    {
        label : 'Hotel Logo',
        name : 'hotelLogo',
        placeholder : 'Please Upload your Hotel Logo',
        type : 'image'
    },
    {
        label : 'Mobile Number',
        name : 'mobileNumber',
        placeholder : 'Please Enter your number',
        type : 'number'
    },
    {
        label : 'Owner Name',
        name : 'ownerName',
        placeholder : 'Please Enter your name',
        type : 'text'
    },
    {
        label : 'Personal Number',
        name : 'PersonalNumber',
        placeholder : 'Please Enter your Personal Number',
        type : 'number'
    },
]

export const MENU_SECTION_OPTIONS = [
    {
        value: 'north-indian',
        label: 'North Indian'
    },
    {
        value: 'south-indian',
        label: 'South Indian'
    },
    {
        value: 'chinese',
        label: 'Chinese'
    },
    {
        value: 'starters',
        label: 'Starters'
    },
    {
        value: 'breads',
        label: 'Breads'
    },
    {
        value: 'drinks',
        label: 'Drinks'
    },
    {
        value: 'deserts',
        label: 'Deserts'
    },
]

export const MENU_OPTIONS = [
    {
        label : 'Food Item',
        name : 'fooditem',
        placeholder : 'Enter name of Food Item',
        type : 'text',
        Category : [{value : 'veg', label : 'Vegetarian'}, {value : 'non-veg', label : 'Non Vegetarian'}]
    },
    {
        label : 'Category',
        name : 'category',
        placeholder : 'Please select Category',
        type : 'select',
        options : [{value : 'veg', label : 'Vegetarian'}, {value : 'non-veg', label : 'Non Vegetarian'}]
    },
    {
        label : 'Is Vegan?',
        name : 'vegan',
        placeholder : 'Please select Category',
        type : 'select',
        options : [{value : false, label : 'No'}, {value : true, label : 'Yes'}]
    },
    {
        label : 'Contains Egg?',
        name : 'egg',
        placeholder : 'Please select Category',
        type : 'select',
        options : [{value : false, label : 'No'}, {value : true, label : 'Yes'}]
    },
    {
        label : 'Contains Onion or Garlic?',
        name : 'onionOrGarlic',
        placeholder : 'Please select Category',
        type : 'select',
        options : [{value : false, label : 'No'}, {value : true, label : 'Yes'}]
    },
    {
        label : 'Price',
        name : 'price',
        placeholder : 'Please type price',
        type : 'number',
    },
    {
        label : 'Section',
        name : 'section',
        placeholder : 'Please type price',
        type : 'select',
        options : MENU_SECTION_OPTIONS
    },
    {
        label : 'Details',
        name : 'details',
        placeholder : 'text',
        type : 'text',
    },
    {
        label : 'Image',
        name : 'image',
        placeholder : 'Please upload Image',
        type : 'image'
    }
]