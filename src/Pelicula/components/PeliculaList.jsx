import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PeliculaTarjeta } from './PeliculaTarjeta';
import { listadoPeliculas } from '../../Listado-peliculas/listado-peliculas';
import { getPeliculas } from '../../store/Pelicula/thunks';
import { useDispatch } from 'react-redux';

export const PeliculaList = () => {

    const dispatch = useDispatch();

    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {

        listadoPeliculas(setPelicula);
        dispatch(getPeliculas());

    }, []);

    return (

        <div className='row rows-cols-1 row-cols-md-3 g-3'>

            {
                pelicula.map(peli => (

                    <PeliculaTarjeta

                        key={peli.show.id}
                        {...peli.show}
                    />
                ))
            }

        </div>
    )
}