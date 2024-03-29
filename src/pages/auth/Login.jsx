import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { signIn } from '../../redux/actions/authActions';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(signIn(user.username, user.password))
            .then(() => {
                setLoading(false)
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div className="content-center">
            {
                loading ? <Loading /> :
                    <div className="row border-radius border shadow-lg" style={
                        {
                            width: '70%',
                            height: '600px',
                            backgroundColor: '#fff',
                        }
                    }>
                        <div className="col-12 col-md-8 border-radius-start  bg-green-two m-0 p-0">
                            <div className="d-flex justify-content-center">

                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="https://patiodelivery.com/wp-content/uploads/2021/02/logo_patio_1.png" className="text-center" width="50%" alt="log" />
                                    </div>
                                    <p className="text-center">Iniciar sesion con tu cuenta</p>
                                    <form id="form-login" className="login-form" onSubmit={handleSubmit}>
                                        <div className="mt-4 div-input">
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete='off'
                                                required
                                                onChange={
                                                    (e) => {
                                                        setUser({
                                                            ...user,
                                                            username: e.target.value
                                                        })
                                                    }
                                                }
                                            />
                                            <span></span>
                                            <label htmlFor="username">Nombre de Usuario</label>
                                        </div>
                                        <div className="mt-4 div-input">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                required
                                                onChange={
                                                    (e) => setUser({
                                                        ...user,
                                                        password: e.target.value
                                                    })
                                                }
                                            />
                                            <span></span>
                                            <label htmlFor="password">Contraseña</label>
                                        </div>
                                        <div className="form-group mt-4">
                                            <button type="submit" className="btn w-100 btn-one text-white mb-3">
                                                Iniciar sesion
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}
