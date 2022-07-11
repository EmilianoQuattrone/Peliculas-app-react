import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { PeliculaRoutes } from '../Pelicula/routes/PeliculaRoutes';

export const AppRouter = () => {

    const { checkingToken, status } = useAuthStore();

    useEffect(() => {

        checkingToken();

    }, []);


    if (status === 'checking') {
        return (

            <h1>Cargando...</h1>
        )
    }

    return (

        <>
            <Routes>
                {
                    (status === 'no-autenticado')
                        ?
                        (
                            <>
                                < Route path='auth/*' element={<AuthRoutes />} />
                                < Route path='/*' element={<Navigate to="/auth/login" />} />
                            </>
                        )
                        :
                        (
                            <>
                                <Route path='/*' element={<PeliculaRoutes />} />
                                < Route path='/*' element={<Navigate to="/" />} />
                            </>
                        )
                }
            </Routes>
        </>
    )
}