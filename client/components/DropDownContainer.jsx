import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import * as Questions from '../questions';

export const DropDownContainer = () => {
  const {
    questionBatch,
    setQuestionBatch,
    setChangeBatch,
  } = useStore(useCardStore);

  const handleChange = (e) => {
    setQuestionBatch(e.target.value);
    setChangeBatch(true);
  };

  const items = [];
  for (const x in Questions) {
    let text = x.replace('Questions', '')
    items.push(
      <MenuItem
        value={x}
        key={x}
      >{text}</MenuItem>
    );
  };

  return (
    <>
      <div className='drop-down-container'>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Technology</InputLabel>
          <Select
            value={questionBatch}
            onChange={handleChange}
            label='Technology'
          >
            {items}
          </Select>
        </FormControl>
      </div>
    </>
  );
};