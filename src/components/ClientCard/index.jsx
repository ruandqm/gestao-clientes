import React from "react";
import "./index.scss"

export default function ClientCard() {
    return (
        <div className="clientCard d-flex justify-content-between align-items-center mb-3">
            <div className="client">
                <span>Maria do Carmo</span><br></br>
                <span className='city'>Capistrano</span>
            </div>

            <span>mariacr@gmail.com</span>
            <span>(85) 240 - 3029</span>
            <img src="../../src/assets/img/edit.svg" alt="editar" />
            <button className='btn btn-success rounded-button'>Conectar</button>
        </div>
    )
}