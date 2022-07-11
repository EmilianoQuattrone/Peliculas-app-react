import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Registro } from '../paginas/Registro';

export const AuthRoutes = () => {

    return (

        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='/*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}