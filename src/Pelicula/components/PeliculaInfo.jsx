import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { purgarPeliculaName } from '../../store/Pelicula/peliculaNameSlice';
import { getPeliculaId } from '../../store/Pelicula/thunks';
import { getPeliculaById } from '../helpers/getPeliculaById';
import './busqueda.css';

export const PeliculaInfo = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        getPeliculaById(id, setInfo);
        dispatch(getPeliculaId(id));

    }, [dispatch, id]);

    const [info, setInfo] = useState([]);

    const { name, language, genres, premiered, image } = info;

    const navigate = useNavigate();
    const onNavigate = () => {

        navigate('/busqueda', { replace: true });
        dispatch(purgarPeliculaName());
    }

    return (

        <>
            <form>
                <div className='row mt-5' key={info.id}>

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
                                ('Cargando imagen...')
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

                        <br />

                        <button
                            className='btn btn-outline-primary'
                            type='submit'
                        >
                            Guardar
                        </button>

                        <button className='btn btn-outline-primary button-espacio'
                            onClick={onNavigate}
                        >
                            Regresar
                        </button>
                    </div>
                </div >
            </form>
        </>
    )
}