import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/access/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        login();
        navigate('/welcome');
      } else {
        setError('Usuário ou senha inválidos.');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Login</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Usuário:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="button">Entrar</button>
        </form>
        <p>Não tem uma conta? <Link to="/register">Registre-se aqui</Link></p>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Aplicativo Genérico</p>
      </footer>
    </div>
  );
}

export default LoginPage;
