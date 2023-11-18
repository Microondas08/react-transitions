import { useEffect, useState } from 'react';

// Definición de la interfaz para las props de LoginForm
interface LoginFormProps {
  onLogin: (username: string) => void;
}

function crearUsuario() {
  const username: string = "Juan Carlos";
  // Aquí puedes agregar más lógica si es necesario
  console.log("Usuario creado:", username);
  return username;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value);
};


  // Manejador de eventos para el envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    // Aquí podrías añadir una validación o una llamada a una API
    console.log('Intento de inicio de sesión con', username, password);
    setIsLoggedIn(true);
    onLogin(username);
  };

  // Efecto para realizar una acción cuando el estado 'isLoggedIn' cambia
  useEffect(() => {
    if (isLoggedIn) {
      console.log('Usuario ha iniciado sesión');
      // Aquí podrías realizar acciones adicionales como redirigir al usuario
    }
  }, [isLoggedIn]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Usuario:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export const Login = () => {
    const handleLogin = (username: string) => {
    console.log(`${username} ha iniciado sesión`);
    // Aquí puedes manejar acciones post-inicio de sesión
  };

  return (
    <div>
      <h1>Formulario de Inicio de Sesión</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
