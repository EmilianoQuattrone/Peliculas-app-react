import { createSlice } from "@reduxjs/toolkit";

export const peliculasSlice = createSlice({

    name: 'peliculas',
    initialState: {

        peliculas: [],
        cargaPagina: false
    },

    reducers: {

        cargaPagina(state) {

            state.cargaPagina = true
        },

        listadoPeliculas(state, action) {

            state.cargaPagina = false;
            state.peliculas = action.payload.peliculas;
        },

        purgarPeliculas: (state) => {

            state.peliculas = [];
            state.cargaPagina = false;
        }
    }
})

export const { listadoPeliculas, cargaPagina, purgarPeliculas } = peliculasSlice.actions;