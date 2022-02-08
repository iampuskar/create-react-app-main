import { createSlice } from '@reduxjs/toolkit'

export const holidaySlice = createSlice({
    name: "login",
    initialState: {
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
        switch5: true,
        switch6: true,
        switch7: true,
        switch8: true,
        switch9: true,
        switch10: true,
        switch11: true,
        switch12: true,
        text: "",
        
    },
    reducers: {
        holidayR: (state, action) => {
            state.switch1 = action.payload.switch1;
            state.switch2 = action.payload.switch2;
            state.switch3 = action.payload.switch3;
            state.switch4 = action.payload.switch4;
            state.switch5 = action.payload.switch5;
            state.switch6 = action.payload.switch6;
            state.switch7 = action.payload.switch7;
            state.switch8 = action.payload.switch8;
            state.switch9 = action.payload.switch9;
            state.switch10 = action.payload.switch10;
            state.switch11 = action.payload.switch11;
            state.switch12 = action.payload.switch12;
            state.text = action.payload.text;

        },

    },

});

export const {holidayR} = holidaySlice.actions;
export default holidaySlice.reducer;