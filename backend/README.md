# Bor-list project

## Handle backend scripts:

- Copy `.env.example` as `.env` then replace the settings in the `.env` file.
- Use the following commands:
  - `npm i` - install the dependencies
    - Create the database:
      - Option1: Create the "broList" database manually in MySQL environment
        - run `db-migrate up` and skip Option2
      - Option2: use command `db-migrate db:create broList` - create the database for server
        - remark: This will only work with flag inserted into:
          - .env: MYSQL_FLAGS=-CONNECT_WITH_DB
          - database.json => "flags": { "ENV": "MYSQL_FLAGS" }
          - config.ts => flags: process.env.MYSQL_FLAGS,
          - connections.ts => flags: config.mysql.flags
          else its get mysql error, after db is created, delete the four lines above from the files and continue with `db-migrate up`
  - `db-migrate up` - create the tables for the server
  - `npm run dev` - start your app in dev mode with nodemon.