import React from 'react';
import movie from '../../assets/imgs/movie.png';
import './peliculas.css';

export const PeliculaMenu = () => {


    return (

        <>
            <div className='container'>

                <img src={movie} alt="" width={900} height={600} />

                <h1 className='titulo'>Movie Pop!</h1>

            </div>
        </>
    )
}