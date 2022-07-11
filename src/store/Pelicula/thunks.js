import { cargaPagina, listadoPeliculas } from "./peliculasSlice";
import { peliculaName } from './peliculaNameSlice';

export const getPeliculas = () => {

    return async (dispatch, getState) => {

        dispatch(cargaPagina());

        //Realizar peticion http
        const url = 'http://api.tvmaze.com/search/shows?q=star%20wars';
        const peticion = await fetch(url);
        const data = await peticion.json();

        dispatch(listadoPeliculas({ peliculas: data }));
    }
}

export const getPeliculaId = (id) => {

    return async (dispatch, getState) => {

        const urlName = `https://api.tvmaze.com/shows/${id}`;
        const respuesta = await fetch(urlName);
        const data = await respuesta.json();

        dispatch(peliculaName({ pelicula: data }));
    }
}