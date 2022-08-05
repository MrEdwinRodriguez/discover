import { createSlice } from '@reduxjs/toolkit';
const BLOCKS = [{_id: 1, name: "Michele", date: "Jan 10, 2022"}, {_id: 2, name: "Tim", date: "Jan 11, 2022"}, {_id: 3, name: "Matt", date: "Jan 12, 2022"}]

const initialState = {
    timelineArray: BLOCKS
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState
});

export const timelineReducer = timelineSlice.reducer;

export const selectAllBlocks = () => {
    return BLOCKS;
};

export const selectBlockById = (id) => {
    return BLOCKS.find(block => block._id === parseInt(id));
};