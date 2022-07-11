import { useDispatch, useSelector } from "react-redux"
import peliculaApi from "../api/peliculas-api";
import { onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { authEmail, status, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await peliculaApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-date', new Date().getTime());
            dispatch(onLogin({ id: data.id, authEmail: data.email }));

        } catch (error) {

            dispatch(onLogout('Credenciales incorrectas'));
        }
    }

    const startRegistro = async ({ nombre, email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await peliculaApi.post('auth/new', { nombre, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-date', new Date().getTime());
            dispatch(onLogin({ id: data.id, authEmail: data.email }));

        } catch (error) {

            dispatch(onLogout(error.response.data?.mensaje || ''));
            console.log(error);
        }
    }

    const checkingToken = async () => {

        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout('token expiro'));

        try {

            const { data } = await peliculaApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-date', new Date().getTime());
            dispatch(onLogin({ id: data.id, authEmail: data.email }));

        } catch (error) {

            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {

        localStorage.clear();
        dispatch(onLogout());
    }

    return {

        //Propiedades
        authEmail,
        status,
        error,

        //Metodos
        startLogin,
        startRegistro,
        checkingToken,
        startLogout
    }
}