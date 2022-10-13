# Bor-list project

## Handle backend scripts:

- Copy `.env.example` as `.env` then replace the settings in the `.env` file.
- Use the following commands:
  - `npm i` - install the dependencies
  - `db-migrate db:create broList` - create the database for server
  - `db-migrate up` - create the tables for the server
  - `npm run dev` - start your app in dev mode with nodemon.