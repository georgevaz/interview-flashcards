import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import useCardStore from '../store/store';
import { useStore } from 'zustand';

export const DropDownContainer = () => {
    const {
        questionBatch,
        setQuestionBatch
    } = useStore(useCardStore);

    const handleChange = (e) => {
        setQuestionBatch(e.target.value);
        console.log(questionBatch);
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
                        <MenuItem value={'react'}>React</MenuItem>
                        <MenuItem value={'redux'}>Redux</MenuItem>
                        <MenuItem value={'node'}>Node</MenuItem>
                        <MenuItem value={'express'}>Express</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
};