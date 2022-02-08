import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        fname: "john",
        lname: "doe",
        country: "usa",
        phone: "1234",


    },
    reducers: {
        update: (state, action) => {
            state.fname = action.payload.fname;
            state.lname = action.payload.lname;
            state.country = action.payload.country;
            state.phone = action.payload.phone;
        },

    },
});



export const { update } = userSlice.actions;
export default userSlice.reducer;