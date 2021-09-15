import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';


const initialStateValue = [
    { id: uuidv4(), content: 'Cooking' },
    { id: uuidv4(), content: 'Travel' },
    { id: uuidv4(), content: 'Reading' },
    { id: uuidv4(), content: 'Running' },
    { id: uuidv4(), content: 'Swimming' },
  ];

export const thingSlice = createSlice({
    name: "thing",
    initialState: { value: initialStateValue},
    reducers: {
        thing: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { thing } = thingSlice.actions;

export default thingSlice.reducer;