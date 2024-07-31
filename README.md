<h1 align="center">Boas-vindas ao repositório do Ignite Call!</h1>

<div align="center"><img src="public/icon-app.svg"/></div>

<h2 align="center">
  <a href="https://app-dt-money.vercel.app" target="_blank">
    Conheça o Ignite Call!
  </a>
</h2>

## O que foi desenvolvido?

<strong>Ignite Call</strong> é uma plataforma de agendamentos. Na página principal, o usuário inicia inserindo seu nome de usuário para efetuar um pré-cadastro. Em seguida, é redirecionado para a página de cadastro, onde é necessário preencher o nome completo, com a opção de editar o nome de usuário preenchido anteriormente. Depois, o usuário precisa conectar sua conta do Google para que a aplicação tenha acesso ao Google Calendar e possa efetuar os agendamentos. Na próxima etapa do registro, o usuário deve selecionar o intervalo de horários em que estará disponível, assim como os dias da semana, sendo que cada agendamento exigirá 1 hora da sua disponibilidade. A última etapa do registro consiste em adicionar uma descrição ao perfil. Ao concluir todo o processo de registro, o usuário é direcionado para a página de agendamento, onde um calendário exibe os dias e horários de acordo com a disponibilidade configurada pelo usuário na etapa de registro. Após selecionar a data e o horário, ocorre a última etapa do agendamento, onde é necessário preencher o nome completo, email e observações, se julgar necessário.

A aplicação foi desenvolvida com Next.js (versão 14.0.3), React (versão 18) e TypeScript. As requisições foram construídas utilizando Route Handlers do próprio Next.js. O banco de dados escolhido foi PostgreSQL, em conjunto com Prisma ORM para abstração das queries. A maioria dos componentes foi fornecida pelo design system [Ignite UI](https://github.com/h3zord/ignite-ui), que usa a biblioteca Stitches para estilização. Para validação dos formulários, foi utilizada a biblioteca Zod em conjunto com React Hook Form. A ferramenta NextAuth.js foi usada para login social, neste caso, o Google. Outras bibliotecas utilizadas incluem: ESLint, Phosphor Icons, Next SEO, Day.js, Axios, TanStack Query para lidar com as requisições e Git para controle de versão.

<strong>➜ A responsividade deste projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Stitches](https://stitches.dev/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [ESLint](https://eslint.org/)
- [Phosphor Icons](https://phosphoricons.com/)
- [NextSEO](https://github.com/garmeeh/next-seo)
- [Day.js](https://day.js.org/)
- [Axios](https://axios-http.com/ptbr/)
- [TanStack Query](https://tanstack.com/)
- [Git](https://git-scm.com/)
- [Ignite UI](https://github.com/h3zord/ignite-ui)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/ignite-call.git
```

### 2 - Entre no repositório
```
cd ignite-call
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

### 5 - Configure as variáveis de ambiente:
➜ <strong>Crie na raíz do projeto um arquivo .env</strong>

```javascript
// URL do banco de dados
DATABASE_URL="postgresql://postgres.avtxmolkgbgjufgdzbwa:UQ4khamiu7oqBAc3@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

// URL do banco de dados usada para as migrations
DIRECT_URL="postgresql://postgres.avtxmolkgbgjufgdzbwa:UQ4khamiu7oqBAc3@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"

// Segredo para criptografia do NextAuth
NEXTAUTH_SECRET="ih0UIuxn7RVUL5pBPkhlx8BctVHKunDWlq1D6qN9jCA="

// ID do Cliente OAuth do Google
GOOGLE_CLIENT_ID="291363418958-pfvidh3t389hkdnpngogfj5gamolhade.apps.googleusercontent.com"

// Segredo do Cliente OAuth do Google
GOOGLE_CLIENT_SECRET="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"
```

<strong>Next.js irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000
