import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function Document({values, handleChange}) {

  


  return (
  <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
      <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          value={values.category}
          label="category"
          onChange={handleChange("category")}
          name='category'
        >
          <MenuItem value={10}>Politics</MenuItem>
          <MenuItem value={20}>Entertainment</MenuItem>
          <MenuItem value={30}>Music</MenuItem>
          <MenuItem value={40}>Arts</MenuItem>
        </Select>
      </FormControl>
    </Box>

      </div>

      <div className="w-full mx-2 flex-1">
          <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
          leading-8 uppercase">
                  Username
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input type="text"
          onChange={handleChange('username')}
          value={values.username}
          name='username'
          placeholder="Username"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
          />
          </div>
      </div>

      

  </div>
)
}
