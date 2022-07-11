import React from 'react';
import { Link } from 'react-router-dom';

export const PeliculaTarjeta = ({
    id,
    name,
    image

}) => {

    return (

        <div className='col'>
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-6">
                        <img src={image.original} className='card-img' alt={name} />
                    </div>

                    <div className="col-6">

                        <div className="card-body">
                            <h5 className='card-title'> {name} </h5>
                        </div>
                    </div>

                    <Link to={`/info/${id}`} className='lead'>
                        Más sobre la película...
                    </Link>
                </div>
            </div>
        </div>
    )
}