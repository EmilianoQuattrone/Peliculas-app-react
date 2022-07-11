import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: 'auth',
    initialState: {

        status: 'checking',
        authEmail: null,
        error: null
    },

    reducers: {

        onChecking: (state) => {

            state.status = 'checking';
            state.authEmail = null;
            state.error = null;
        },

        onLogin: (state, { payload }) => {

            state.status = 'authenticated';
            state.authEmail = payload;
            state.error = null;
        },

        onLogout: (state, { payload }) => {

            state.status = 'no-autenticado';
            state.authEmail = '';
            state.error = payload;
        }
    }
})

export const { onChecking, onLogin, onLogout } = authSlice.actions;