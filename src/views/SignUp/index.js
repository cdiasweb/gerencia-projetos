import React from "react";
import "./SignUp.css";

import logo from '../../assets/logo.svg';

export default class SignUp extends React.Component {
    render() {
        return (
            <div id="container_principal">
                <div id="container_login_pos">
                <div className="titulo_login">SignUp</div>
                    <div id="container_login">
                        <img alt="logo" className="logo" src={logo}></img>
                        <form action="http://localhost:3333/signup" method="POST">
                            <input type="text" name="username" id="login_user" placeholder="Usuário" required autoComplete="off"/>
                            <input type="password" name="password" id="login_pass" placeholder="Senha" required/>
                            <button>Acessar</button>
                        </form>
                    </div>

                    <div id="container_signup_forgot">
                        <a href="#">Esqueci minha senha</a>
                        <button>Sign Up</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
