import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Busqueda } from '../components/Busqueda';
import { PeliculaMenu } from '../paginas/PeliculaMenu';
import { Navbar } from '../Navbar/Navbar';
import { PeliculaInfo } from '../components/PeliculaInfo';

export const PeliculaRoutes = () => {

    return (

        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path='/' element={<PeliculaMenu />} />
                    <Route path='busqueda' element={<Busqueda />} />
                    <Route path='info/:id' element={<PeliculaInfo />} />
                    <Route path='/' element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}