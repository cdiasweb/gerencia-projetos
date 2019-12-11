import React from "react";
import "./SignUp.css";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg';

import api from "../../services/api";

export default class SignUp extends React.Component {

    state = { username: '', email: '', emailConfirm: '', password: '', passwordConfirm: '', error: '' };

    handleUsernameChange = (username) => {
        this.setState({ username });
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp');
    };

    handlePasswordConfirmChange = (passwordConfirm) => {
        this.setState({ passwordConfirm });
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    }

    handleEmailConfirmChange = (emailConfirm) => {
        this.setState({ emailConfirm });
    }

    render() {
        return (
            <div id="container_principal">
                <div id="container_login_pos">
                
                    <div id="container_login">
                    <div className="content_signup">
                        <span>SignUp</span>
                        <img alt="logo" src={logo} width="60"></img>
                        
                        
                    </div>
                        <form action="http://localhost:3333/signup" method="POST">
                            
                            <input 
                                type="text" 
                                name="username" 
                                id="login_user" 
                                placeholder="Usuário" 
                                required 
                                autoComplete="off"
                                value={this.state.username}
                                onChangeText={this.handleUsernameChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                id="login_pass" 
                                placeholder="Senha" 
                                required 
                                autoComplete="off"
                                value={this.state.password}
                                onChangeText={this.handlePasswordChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                            />
                            <input 
                                type="password" 
                                name="password" 
                                id="login_pass" 
                                placeholder="Confirmação de senha" 
                                required 
                                autoComplete="off"
                                value={this.state.passwordConfirm}
                                onChangeText={this.handlePasswordConfirmChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                            />
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="E-mail" 
                                required 
                                autoComplete="off"
                                value={this.state.email}
                                onChangeText={this.handleEmailChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="Confirmação de e-mail" 
                                required 
                                autoComplete="off"
                                value={this.state.emailConfirm}
                                onChangeText={this.handleEmailConfirmChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <button>Cadastrar</button>
                        </form>
                    </div>

                    <div id="container_signup_forgot">
                        <Link to="/forgot" >Esqueci minha senha</Link>
                        <Link to="/login" >Entrar</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
