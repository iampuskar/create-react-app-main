import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        password: "",
        confirmPassword: "",
    },
    reducers: {
        loginR: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword;

        },

    },

});

export const {loginR} = loginSlice.actions;
export default loginSlice.reducer;