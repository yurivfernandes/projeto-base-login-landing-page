import React from 'react';
  import { Link } from 'react-router-dom';

  function LandingPage() {
    return (
      <div className="container">
        <header className="header">
          <h1>Bem-vindo ao Nosso Aplicativo</h1>
        </header>
        <main>
          <p>Explore nosso aplicativo e descubra suas funcionalidades.</p>
          <Link to="/login" className="button">Entrar</Link>
          <Link to="/register" className="button">Registrar</Link>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Aplicativo Genérico</p>
        </footer>
      </div>
    );
  }

  export default LandingPage;
