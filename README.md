# Ticket Hub

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-8B5CF6?style=for-the-badge)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![ShadCN UI](https://img.shields.io/badge/ShadCN%20UI-000000?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

Ticket Hub é uma plataforma para gerenciamento de tickets, desenvolvida com **Next.js**, **TypeScript**, **React Hook Form**, **Zod**, **TailwindCSS**, **Axios** e **ShadCN UI**.

## Tecnologias Utilizadas

- **Next.js** - Framework para React com renderização híbrida e otimização de desempenho.
- **TypeScript** - Superset tipado do JavaScript para um código mais seguro e escalável.
- **React Hook Form** - Gerenciamento eficiente de formulários em React.
- **Zod** - Validação e tipagem de dados de entrada.
- **TailwindCSS** - Biblioteca para estilização baseada em utilitários.
- **Axios** - Cliente HTTP para interação com a API.
- **ShadCN UI** - Componentes modernos e acessíveis para UI.

## Repositório do Backend

O backend do projeto está disponível em:
[Ticket Hub - Backend](https://github.com/seu-usuario/ticket-hub-backend)

## Como Rodar o Projeto

### Requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/ticket-hub.git
   cd ticket-hub
   ```

2. Instale as dependências:
   ```bash
    pnpm install
    # ou
    yarn install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` e adicione as variáveis necessárias (veja `.env.example`).

4. Execute o projeto em ambiente de desenvolvimento:
   ```bash
    pnpm dev
    # ou
    npm run dev
    # ou
    yarn dev
   ```

5. O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

A estrutura do projeto segue uma organização modularizada:

```
/ticket-hub
├── .next              # Build do Next.js
├── node_modules       # Dependências do projeto
├── public             # Arquivos estáticos
├── src
│   ├── app           # Rotas e páginas do Next.js
│   ├── assets        # Arquivos de mídia
│   ├── components    # Componentes reutilizáveis
│   ├── constants     # Constantes globais
│   ├── hooks         # Hooks customizados
│   ├── lib           # Funções auxiliares
│   ├── services      # Integração com API
│   ├── types         # Tipagens TypeScript
│   ├── validators    # Esquemas de validação com Zod
│   ├── middleware.ts # Middleware do Next.js
├── .gitignore        # Arquivos ignorados pelo Git
├── next-env.d.ts     # Definições do ambiente Next.js
├── next.config.ts    # Configurações do Next.js
├── package.json      # Dependências e scripts do projeto
├── tsconfig.json     # Configuração do TypeScript
├── tailwind.config.ts# Configuração do TailwindCSS
├── postcss.config.mjs# Configuração do PostCSS
├── eslint.config.mjs # Configuração do ESLint
└── README.md         # Documentação do projeto
```

## Aprendizados

Durante o desenvolvimento do **Ticket Hub**, aprendemos e aplicamos conceitos importantes:
- **Gerenciamento de formulários** com React Hook Form e validação com Zod.
- **Estilização eficiente** com TailwindCSS e componentes acessíveis do ShadCN UI.
- **Gerenciamento de estado e requisições** usando React Query e Axios.
- **Melhores práticas de tipagem** no TypeScript para um código mais robusto.
- **Organização do Next.js**, utilizando `app` directory para um código modular.

## Contato
Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

**Feito com Next.js e muito código! 🚀**

