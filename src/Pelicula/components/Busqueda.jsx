import React from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { PeliculaList } from './PeliculaList';
import { getPeliculaByName } from '../helpers/getPeliculaByName';
import { useState } from 'react';
import { useEffect } from 'react';
import './busqueda.css';

export const Busqueda = () => {

    const [peliculaName, setPeliculaName] = useState([]);
    const { id, name, language, genres, premiered, image } = peliculaName;

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    useEffect(() => {

        getPeliculaByName(q, setPeliculaName);

    }, [q, setPeliculaName]);

    const { buscar, onInputChange } = useForm({

        buscar: q
    });

    const handleSubmit = (event) => {

        event.preventDefault();
        if (buscar.trim().length <= 1) return;

        navigate(`?q=${buscar.trim()}`, { replace: true })
    }

    return (

        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="buscar"
                    className='form-control mt-4'
                    placeholder='Buscar pelicula'
                    value={buscar}
                    onChange={onInputChange}
                    autoComplete='off'
                />

                <button className='btn btn-outline-primary mt-1'>
                    Buscar
                </button>

            </form>

            <br />

            <div className='col-6'>
                <h4> Resultado de busquedad: </h4>

                <hr />

                {
                    (name)

                        ?

                        <div key={id}>

                            <div className="col-4">

                                {

                                    /*
                                    Como la image tiene un tiempo de cargar hasta que realiza la peticion,
                                    hacemos un ternario para que no de error.
                                    */

                                    (image)

                                        ?

                                        <img src={image.original}
                                            alt={name} className='img-thumbnail' />

                                        :

                                        ('')
                                }

                                <h3 className='h3'>{name}</h3>

                                <div className="col-8">

                                    <h5>Idioma: <small className="text-muted">{language}</small></h5>

                                    <br />

                                    <h5>Generos:</h5>
                                    <p>{genres}</p>

                                    <br />

                                    <h5>Fecha de estreno:</h5>
                                    <p>{premiered}</p>
                                </div>
                            </div>
                        </div>

                        :

                        ('No se realizo ninguna busqueda.')
                }

            </div>

            <h1 className="h1"> Películas </h1>

            <hr />

            <div className='container'>

                <PeliculaList />
            </div>
        </>
    )
}