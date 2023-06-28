import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Shoes Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#">Find a store</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
