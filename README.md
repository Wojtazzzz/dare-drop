# DareDrop App

DareDrop is a full-stack TypeScript application developed for the purpose of a recruitment process for DareDrop company. The application allows users to view a list of streamers, vote for them in the rankings, and display detailed information about each streamer.

## Technologies Used

DareDrop is built using the following technologies:

- TypeScript: The primary programming language used for both frontend and backend development.
- Next.js: A React framework for server-side rendering and building web applications.
- Nest.js: A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
- React: A JavaScript library for building user interfaces.
- Prisma: An open-source database toolkit used to access the database and perform CRUD operations.
- SQLite: A lightweight, file-based database engine used for local development.
- TurboRepo: A tool that simplifies the management of multiple related projects within a single repository.
- React Query: A data-fetching and state management library for React.
- Yup: A JavaScript schema builder for value parsing and validation.
- Axios: A popular HTTP client for making API requests.
- Formik: A form library for React that helps with form validation, handling, and submission.

Please note that this project is designed solely for the recruitment process of DareDrop company.

## How To Install

- Clone this repository

```bash
  gh repo clone Wojtazzzz/dare-drop
```

- Go to the project directory

```bash
  cd dare-drop
```

- Install dependencies

```bash
  pnpm install
```

- copy *.env.example* as *.env* and fill with own data (this should be done in both workspaces)

- Generate prisma

```bash
  cd ./apps/api && npx prisma generate && cd ../../
```

- Run migrations

```bash
  cd ./apps/api && npx prisma migrate dev && cd ../../
```

- Start dev server...

```bash
  pnpm run dev
```

- ...or build project and start in production

```bash
  pnpm run build
```

```bash
  pnpm run start
```

- If you want you can run seeders

```bash
  cd ./apps/api && pnpm run prisma:seed && cd ../../
```


> **Note:**
> Node.js is required

## License

MIT License

## Readme

Created by ChatGPT
