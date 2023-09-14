import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action);
        }
    }
})

export const {add} = cartSlice.actions

export default cartSlice.reducer
