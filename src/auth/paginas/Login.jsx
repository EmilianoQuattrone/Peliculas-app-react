import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const Login = () => {

    const { email, password, onInputChange } = useForm({

        email: '',
        password: ''
    });

    const { startLogin, error } = useAuthStore();

    useEffect(() => {

        if (error !== null) {

            Swal.fire('Error en las credenciales', error, 'error');
        }

    }, [error]);

    const onSubmit = (e) => {

        e.preventDefault();
        startLogin({ email, password });
    }

    return (

        <section className="vh-100 background-color">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <form onSubmit={onSubmit}>

                                    <h3 className="mb-5 login">Inicie Sesión</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label titulo-label"> Email </label>
                                        <input type="email"
                                            name='email'
                                            value={email}
                                            onChange={onInputChange}
                                            className="form-control" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label titulo-label" > Contraseña </label>
                                        <input type="password"
                                            name='password'
                                            value={password}
                                            onChange={onInputChange}
                                            className="form-control" />
                                    </div>

                                    <button className="btn btn-primary btn-block buton-size"
                                        type="submit"
                                    >
                                        Login
                                    </button>

                                    <hr className="my-4" />

                                    {/* <button className="btn btn-danger btn-lg btn-block google"
                                        type="submit">
                                        <i className="fab fa-google me-2"></i>iniciar sesión con google
                                    </button> */}
                                    <br />
                                    <Link to="/auth/registro" className='link-tamaño'>Crear cuenta</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}