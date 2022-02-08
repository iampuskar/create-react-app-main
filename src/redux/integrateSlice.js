import { createSlice } from '@reduxjs/toolkit'

export const integrateSlice = createSlice({
    name: "integrate",
    initialState: {
        toggle: true,
        select: "",

    },
    reducers: {
        integrateR: (state, action) => {
            state.toggle = action.payload.toggle;
            state.select = action.payload.select;
        },

    },

});

export const { integrateR } = integrateSlice.actions;
export default integrateSlice.reducer;