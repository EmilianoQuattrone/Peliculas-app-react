import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import './registro.css';

export const Registro = () => {

    const { nombre, email, password, onInputChange } = useForm({

        nombre: 'Emiliano',
        email: 'emiliano@gmail.com',
        password: '123456'
    });

    const { startRegistro, error } = useAuthStore();

    useEffect(() => {

        if (error !== null) {

            Swal.fire(`Error credencial`, error, 'error');
        }

    }, [error]);

    const onSubmint = (e) => {

        e.preventDefault();
        startRegistro({ nombre, email, password });
    }

    return (

        <section className="vh-100 background-color">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <form onSubmit={onSubmint}>

                                    <h3 className="mb-5 login">Crear una cuenta</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label titulo-label"> Nombre completo </label>
                                        <input type="text"
                                            name='nombre'
                                            value={nombre}
                                            onChange={onInputChange}
                                            className="form-control"
                                            placeholder='Nombre completo' />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label titulo-label" > Correo </label>
                                        <input type="email"
                                            name='email'
                                            value={email}
                                            onChange={onInputChange}
                                            className="form-control"
                                            placeholder='correo' />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label titulo-label" > Contraseña </label>
                                        <input type="password"
                                            name='password'
                                            value={password}
                                            onChange={onInputChange}
                                            className="form-control"
                                            placeholder='contraseña' />
                                    </div>

                                    <button className="btn btn-primary btn-block buton-size"
                                        type="submit">Crear cuenta</button>

                                    <hr className="my-4" />
                                    <p className='initialism parrafo'>¿Ya tienes cuenta?</p>
                                    <Link to="/auth/login" className='link-tamaño'> Ingresar </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}