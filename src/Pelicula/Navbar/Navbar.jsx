import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useAuthStore } from '../../hooks/useAuthStore';
import { purgarPeliculas } from '../../store/Pelicula/peliculasSlice';

export const Navbar = () => {

    const dispatch = useDispatch()
    const { authEmail, startLogout } = useAuthStore();


    const handleLogout = () => {

        startLogout();
        dispatch(purgarPeliculas());
    }

    return (

        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>

            <div className="navbar-collapse">

                <div className='navbar-nav'>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/'
                    >
                        <i className="fa-solid fa-house"></i>
                    </NavLink>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/busqueda'
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </NavLink>
                </div>
            </div>

            <div className='navbar d-flex justify-content-end'>

                <ul className='navbar-nav ml-auto'>

                    <span className='nav-item nav-link text-primary'> {authEmail.authEmail} </span>

                    <button className='nav-item nav-link btn' onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </ul>
            </div>
        </nav>
    )
}