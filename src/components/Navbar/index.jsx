import React from "react";
import "./index.scss"

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src=".../../src/assets/img/lucrei.svg" alt="Logo" width="70" height="50" class="d-inline-block align-text-top" />
                    </a>
                    <div class="navbar justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active user-description" aria-current="page" href="#">Bebê Presentes <br /> <p className="user-type">Empresa</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}