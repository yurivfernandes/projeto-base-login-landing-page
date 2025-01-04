import React from 'react';

  function RegisterPage() {
    return (
      <div className="container">
        <header className="header">
          <h1>Registrar</h1>
        </header>
        <main>
          <form>
            <div>
              <label>Usuário:</label>
              <input type="text" name="username" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Senha:</label>
              <input type="password" name="password" required />
            </div>
            <div>
              <label>Telefone:</label>
              <input type="text" name="phone" />
            </div>
            <div>
              <label>Nome da Empresa:</label>
              <input type="text" name="company_name" />
            </div>
            <div>
              <label>CPF:</label>
              <input type="text" name="cpf" required />
            </div>
            <div>
              <label>CEP:</label>
              <input type="text" name="cep" />
            </div>
            <button type="submit" className="button">Registrar</button>
          </form>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Aplicativo Genérico</p>
        </footer>
      </div>
    );
  }

  export default RegisterPage;
