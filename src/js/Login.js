import React, {Component} from 'react';
import {Navigate} from 'react-router-dom';
import '../css/Login.css';

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isRegistering: false, //Parametro para saber si es registro o inicio de sesión
            error: '',
            showForgotPassword: false,
            recoveryUsername: '',
            captchaNumber: '',
            captchaError: '',
            redirect: false,
        };
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
            error: '' 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, isRegistering } = this.state; 

        if (isRegistering) {
            // Verificar si el usuario ya existe
            const users = JSON.parse(localStorage.getItem('users') || '[]'); 
            if (users.find(user => user.username === username)) {
                this.setState({ error: 'El usuario ya existe' });
                return;
            }

            // Registrar nuevo usuario
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users)); // Guardar usuarios en localStorage
            this.setState({ 
                error: '', 
                isRegistering: false,
                username: '',
                password: ''
            }); 
            alert('Usuario registrado exitosamente');

        } else {
            // Verificar credenciales
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Guardar sesión actual
                localStorage.setItem('currentUser', username);
                this.setState({ redirect: true });
            } else {
                this.setState({ error: 'Usuario o contraseña incorrectos' });
            }
        }
    }

    toggleMode = () => {
        this.setState(prevState => ({
            isRegistering: !prevState.isRegistering,
            username: '',
            password: '',
            error: ''
        }));
    }

    // Método para generar número aleatorio de 6 dígitos
    generateCaptcha = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Mostrar modal de recuperación
    showRecoveryModal = () => {
        this.setState({
            showForgotPassword: true,
            captchaNumber: this.generateCaptcha(),
            userCaptcha: '',
            recoveryUsername: '',
            captchaError: ''
        });
    }

    // Cerrar modal
    closeRecoveryModal = () => {
        this.setState({
            showForgotPassword: false,
            captchaError: ''
        });
    }

    // Manejar cambios en el formulario de recuperación
    handleRecoveryChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            captchaError: ''
        });
    }

    // Verificar captcha y mostrar contraseña
    handleRecoverySubmit = (e) => {
        e.preventDefault();
        const { captchaNumber, userCaptcha, recoveryUsername } = this.state;
        
        if (captchaNumber === userCaptcha) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === recoveryUsername);
            
            if (user) {
                alert(`Tu contraseña es: ${user.password}`);
                this.closeRecoveryModal();
            } else {
                this.setState({ captchaError: 'Usuario no encontrado' });
            }
        } else {
            this.setState({ 
                captchaError: 'Código incorrecto',
                captchaNumber: this.generateCaptcha(),
                userCaptcha: ''
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/" />;
        }
        return (
            <div className="login-container">
                <h2>{this.state.isRegistering ? 'Registro' : 'Iniciar Sesión'}</h2>
                {this.state.error && (
                    <div className="error-message">
                        {this.state.error}
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuario:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit">
                        {this.state.isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
                    </button>
                </form>
                <button onClick={this.toggleMode} className="toggle-button">
                    {this.state.isRegistering 
                        ? '¿Ya tienes cuenta? Inicia sesión' 
                        : '¿No tienes cuenta? Regístrate'}
                </button>
                <button onClick={this.showRecoveryModal} className="forgot-password-button">
                    ¿Olvidaste tu contraseña?
                </button>

                {this.state.showForgotPassword && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Recuperar Contraseña</h3>
                            <form onSubmit={this.handleRecoverySubmit}>
                                <div className="form-group">
                                    <label htmlFor="recoveryUsername">Usuario:</label>
                                    <input
                                        type="text"
                                        id="recoveryUsername"
                                        name="recoveryUsername"
                                        value={this.state.recoveryUsername}
                                        onChange={this.handleRecoveryChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ingresa el siguiente código: {this.state.captchaNumber}</label>
                                    <input
                                        type="text"
                                        name="userCaptcha"
                                        value={this.state.userCaptcha}
                                        onChange={this.handleRecoveryChange}
                                        required
                                    />
                                </div>
                                {this.state.captchaError && (
                                    <div className="error-message">
                                        {this.state.captchaError}
                                    </div>
                                )}
                                <div className="modal-buttons">
                                    <button type="submit">Recuperar</button>
                                    <button type="button" onClick={this.closeRecoveryModal}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default Login;
