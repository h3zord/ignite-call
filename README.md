<h1 align="center">Boas-vindas ao repositório do Ignite Call!</h1>
<div align="center">🗓️</div>

## O que foi desenvolvido?

O <strong>Ignite Call</strong> é uma plataforma de agendamentos. Na página principal o usuário inicia inserindo seu nome de usuário para efetuar um pré cadastro, logo após é redirecionado para a página de cadastro, onde é necessário preencher o nome completo com a opção editar o nome de usuário preenchido anteriormente, em seguida é preciso conectar sua conta do Google para que a aplicação tenha acesso ao Google Calendar e assim efetuar os agendamentos. Na próxima etapa de registro, o usuário deverá selecionar o intervalo de horários em que estará disponível, assim como os dias da semana, cada agendamento exigirá 1 hora da sua disponibilidade. A última etapa de registro consiste em adicionar uma descrição ao perfil, ao concluir todo o processo de registro o usuário é direcionado para a página de agendamento, onde estará visível um calendário com os dias e horários de acordo com a disponibilidade configurada pelo usuário na etapa de registro. Após selecionado a data e o horário ocorre a última etapa do agendamento, onde se deve preencher o nome completo, email e oberservações se achar julgar necessário.

A aplicação foi desenvolvida com o Next.js na versão 14.0.3, React e Typescript, as requisições foram construídas com o Route Handlers do próprio Next.js. O banco de dados escolhido foi o PostgreSQL em conjunto com o Prisma ORM para a abstração das queries. A grande maioria dos componentes foram fornecidos pelo design system [Ignite UI](https://github.com/h3zord/ignite-ui), o qual usa a biblioteca Stitches para a estilização. Para a validação dos formulário fiz uso da biblioteca Zod em conjunto com React Hook Form. A ferramente Next Auth foi usada para login social, nesse caso o Google. Mais algumas bibliotecas foram utilizadas. como: Eslint, Phosphor React, Next SEO, Day.js, Axios e TanStack Query para lidar com as requisições.

## Linguagens e ferramentas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Stitches](https://stitches.dev/)
- [Eslint](https://eslint.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Day.js](https://day.js.org/)
- [Zod](https://zod.dev/)
- [NextAuth.js](https://next-auth.js.org/)
- [Axios](https://axios-http.com/ptbr/)
- [TanStack Query](https://tanstack.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [NextSEO](https://github.com/garmeeh/next-seo)
- [IgniteUI](https://github.com/h3zord/ignite-ui)

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

// URL da API
NEXT_PUBLIC_API_URL=""

// Segredo para criptografia do NextAuth
NEXTAUTH_SECRET="ih0UIuxn7RVUL5pBPkhlx8BctVHKunDWlq1D6qN9jCA="

// ID do Cliente OAuth do Google
GOOGLE_CLIENT_ID="291363418958-pfvidh3t389hkdnpngogfj5gamolhade.apps.googleusercontent.com"

// Segredo do Cliente OAuth do Google
GOOGLE_CLIENT_SECRET="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"
```
<br/>

<strong>O Next.js irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000