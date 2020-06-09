import React  from "react";
import loginImg from "../Login/login.svg";

export class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="base-container">
            <div className="header">Iniciar Sesion</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Usuario">Usuario</label>
                        <input type="text" name="usuario" placeholder="Nombre De Usuario" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Contraseña">Contraseña</label>
                        <input type="password" name="Contraseña" placeholder="Contraseña" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Acceder
                </button>
            </div>
        </div>
        );
    }
}


