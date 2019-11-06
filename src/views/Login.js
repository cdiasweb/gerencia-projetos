import React from 'react';
import '../assets/Login.css';
export default class Login extends React.Component {
    render() {
        return (
            <div id="container_login">
                <div>Login</div>
                <form>
                    <input type="text" name="username" id="login_user" placeholder="Usuário" required/>
                    <input type="text" name="password" id="login_pass" placeholder="Senha" required/>
                    <button>Acessar</button>
                </form>
            </div>
        )
    }
}