import { createSlice } from '@reduxjs/toolkit'

export const businessSlice = createSlice({
    name: "business",
    initialState:{
        businessContact:"",
        phone:"",
        call:"",
        website:"",
        exterior:"",
        interior:"",
        twitter:"",
        colony:"",
        facebook:"",
        state:"",
        cp:"",
        instagram:"",

    },
    reducers:{
        businessR: (state, action) => {
            state.businessContact = action.payload.businessContact;
            state.phone = action.payload.phone;
            state.call = action.payload.call;
            state.website = action.payload.website;
            state.exterior = action.payload.exterior;
            state.interior = action.payload.interior;
            state.twitter = action.payload.twitter;
            state.colony = action.payload.colony;
            state.facebook = action.payload.facebook;
            state.state = action.payload.state;
            state.cp = action.payload.cp;
            state.instagram = action.payload.instagram;

        },
    },
});

export const {businessR} = businessSlice.actions;
export default businessSlice.reducer;
