# 🚀 Projeto Base Login & Landing Page
> Sistema moderno de autenticação e landing page usando Django e React

## ✨ Visão Geral
Estrutura inicial com sistema de autenticação pronto para uso, ideal como ponto de partida para seus projetos web modernos.

## 📋 Pré-requisitos

- 🐍 Python 3.8 ou superior
- 💚 Node.js 14.x ou superior
- 📦 pip (gerenciador de pacotes Python)
- 📦 npm (gerenciador de pacotes Node.js)

## 🛠️ Configuração do Ambiente

1. 📥 Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-base-login-landing-page.git
    cd projeto-base-login-landing-page
    ```

2. 🐍 Configure o ambiente Python:
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/Mac
    # ou
    venv\Scripts\activate  # Windows
    ```

3. ⚡ Instale as dependências do Python:
    ```bash
    pip install -r requirements.txt
    ```

4. 📦 Instale as dependências do Node:
    ```bash
    cd frontend
    npm install
    ```

## 🚀 Executando o Projeto

### 🔧 Backend (Django)

1. 🔄 Aplique as migrações:
    ```bash
    cd backend
    python manage.py migrate
    ```

2. 🌐 Inicie o servidor:
    ```bash
    python manage.py runserver
    ```

### 💻 Frontend

1. 🎯 Em outro terminal, inicie o servidor de desenvolvimento:
    ```bash
    cd frontend
    npm run dev
    ```

## ✨ Recursos Implementados

- 🔐 Sistema de autenticação básico (login/registro)
- 🔌 API RESTful para autenticação
- 🛡️ Proteção CSRF
- 📱 Interface de usuário responsiva

## 🤝 Contribuições

### 🔑 Autenticação Social
- [ ] 🔍 Login com Google
- [ ] 👥 Login com Facebook
- [ ] 🐱 Login com GitHub

### 📈 Melhorias Planejadas
- [ ] 🔄 Recuperação de senha
- [ ] ✉️ Verificação de email
- [ ] 👤 Perfil de usuário
- [ ] 🧪 Testes automatizados

### 📝 Como Contribuir:
1. 🍴 Faça um fork do projeto
2. 🌿 Crie sua branch (`git checkout -b feature/RecuperacaoSenha`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona recuperação de senha'`)
4. 📤 Push para a branch (`git push origin feature/RecuperacaoSenha`)
5. 🔍 Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---
⭐ Feito [yurivfernandes]
