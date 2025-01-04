import React from 'react';

  function WelcomePage() {
    return (
      <div className="container">
        <header className="header">
          <h1>Bem-vindo!</h1>
        </header>
        <main>
          <p>Você está logado no nosso aplicativo. Aproveite!</p>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Aplicativo Genérico</p>
        </footer>
      </div>
    );
  }

  export default WelcomePage;
