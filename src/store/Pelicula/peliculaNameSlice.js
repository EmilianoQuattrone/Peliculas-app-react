import { createSlice } from "@reduxjs/toolkit";

export const peliculaNameSlice = createSlice({

    name: 'pelicula',
    initialState: {

        pelicula: []
    },

    reducers: {

        peliculaName(state, action) {

            state.pelicula = action.payload.pelicula;
        },

        purgarPeliculaName(state) {

            state.pelicula = [];
        }
    }
});

export const { peliculaName, purgarPeliculaName } = peliculaNameSlice.actions;