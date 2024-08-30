import React from "react";
export const NavBar = () => {
    return (
        <div className="text-center">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Miami-PT-71</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto d-flex">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary">Cervesas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};