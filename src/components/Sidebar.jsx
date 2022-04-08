import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

export const Sidebar = () => {
    const token = localStorage.getItem('token');
    const { user, handleLogout } = useContext(AuthContext);
    return (
        <div className="offcanvas offcanvas-start d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" tabIndex="-1" id="sidebar" aria-labelledby="offcanvasWithBackdropLabel" style={{ width: 280 }}>
            <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4 text-center">
                    <img src="https://patiodelivery.com/wp-content/uploads/2021/02/logo_patio_1.png" alt="logo Patio" width="50%" />
                </span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto" >
                <li>
                    <NavLink to="/" className="text-white nav-link">
                        <i className="fa-solid fa-house me-2"></i>Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/merchants" className="text-white nav-link">
                        <i className="fa-solid fa-table-columns me-2"></i>Comerciantes
                    </NavLink>
                </li>
                <li>
                    <div className="nav-link" role="button" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse">
                        <i className="fa-solid fa-gauge me-2"></i>Tablero<i className="fa-solid fa-sort-down ms-2 float-end"></i>
                    </div>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-3">
                            <NavLink to="/" className="text-white nav-link" >
                                <i className="fa-solid fa-table-columns"></i> Tablero 1
                            </NavLink>
                            <NavLink to="/" className="text-white nav-link" >
                                <i className="fa-solid fa-table-columns"></i> Tablero 2
                            </NavLink>
                        </ul>
                    </div>
                </li>

            </ul>
            <hr />
            <div className="dropdown">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong className="text-white">{user.email}</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="/">Configuraciones</a></li>
                    <li><a className="dropdown-item" href="/">Perfil</a></li>
                    <li className="dropdown-divider"></li>
                    {
                        token && <li><a href='/' className="dropdown-item" onClick={handleLogout} data-bs-dismiss="offcanvas" aria-label="Close">Cerrar Sesion</a></li>
                    }
                </ul>
            </div>
        </div>
    )
}
