# 🚀 Projeto Base Login & Landing Page
> Sistema moderno de autenticação e landing page usando Django e React

[![Django](https://img.shields.io/badge/Django-4.2-green.svg)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/DRF-3.14.0-red.svg)](https://www.django-rest-framework.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)

## ✨ Visão Geral
Estrutura inicial com sistema de autenticação completo usando Django REST framework, pronto para uso e ideal como ponto de partida para seus projetos web modernos.

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

## 🛠️ Tecnologias Utilizadas

- **Backend**:
  - [Django](https://www.djangoproject.com/) (4.2) - Framework web
  - [Django REST framework](https://www.django-rest-framework.org/) (3.14.0) - API REST
  - [Django CORS Headers](https://github.com/adamchainz/django-cors-headers) (3.13.0) - Gerenciamento CORS
  - [Django AllAuth](https://django-allauth.readthedocs.io/) (0.54.0) - Autenticação social
  - [Python Dotenv](https://github.com/theskumar/python-dotenv) (1.0.0) - Gerenciamento de variáveis de ambiente
  - [Pillow](https://python-pillow.org/) (10.0.0) - Processamento de imagens

### 📋 Recursos da API REST

- 🔐 Autenticação via Token
- 📡 Endpoints RESTful
- 📚 Documentação automática da API
- 🔒 Permissões personalizadas
- 🌐 Suporte a CORS configurado

### 🔧 Configuração da API

1. Obter token de autenticação:
    ```bash
    curl -X POST http://localhost:8000/api-token-auth/ 
         -H "Content-Type: application/json" 
         -d '{"username":"seu_usuario", "password":"sua_senha"}'
    ```

2. Usar o token nas requisições:
    ```bash
    curl -H "Authorization: Token seu_token_aqui" 
         http://localhost:8000/api/endpoint/
    ```

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
