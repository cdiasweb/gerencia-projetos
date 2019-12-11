import React from 'react';
import './Login.css';
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";



export default class Login extends React.Component {

    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `signup`;
        window.location.hash(path);
    }

    render() {
        return (
            <div id="container_principal">
                <div id="container_login_pos">
                <div className="titulo_login">Login</div>
                    <div id="container_login">
                        <img alt="logo" className="logo" src={logo}></img>
                        <form action="http://localhost:3333/autentica" method="POST">
                            <input type="text" name="username" id="login_user" placeholder="Usuário" required autoComplete="off"/>
                            <input type="password" name="password" id="login_pass" placeholder="Senha" required/>
                            <button>Acessar</button>
                        </form>
                    </div>

                    <div id="container_signup_forgot">
                        <Link to="/forgot">Esqueci minha senha</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}