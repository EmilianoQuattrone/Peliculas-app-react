import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { peliculaNameSlice } from './Pelicula/peliculaNameSlice';
import { peliculasSlice } from './Pelicula/peliculasSlice';

export const store = configureStore({

    reducer: {

        auth: authSlice.reducer,
        listadoPeliculas: peliculasSlice.reducer,
        peliculaName: peliculaNameSlice.reducer
    }
});