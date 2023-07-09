import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
    displayName: "@Agent",
    username: null,
    password: null,
    email: null,
    token: null,
    isloggedIn: false
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialStateValues,
    reducers: {
        login: (state, action) => {
            state.displayName = action.payload.username + "@Agent";
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isloggedIn = true;
        },
        logout: (state, action) => {
            if (!action.payload.token) {
                state.displayName = "@Agent";
                state.username = null;
                state.password = null;
                state.email = null;
                state.token = null;
                state.isloggedIn = false;
                console.log("Üye çıkış işlemi yapılmıştır.")
            } else {
                console.log("Üye çıkış işlemi yapılamamıştır.")
            }
        }
    },
})


export const loginAsync = payload => dispatch => {
    setTimeout(() => {
        dispatch(login(payload));
    }, 2000);
};


export const logoutAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(logout(amount));
    }, 2000);
};

export const { login, logout } = authenticationSlice.actions;

export const selectedAuthentication = state => state.authentication;

export default authenticationSlice.reducer