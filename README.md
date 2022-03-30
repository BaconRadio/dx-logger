# dx-logger

dx-logger is a web based amateur radio contact logging solution. Technologies used include NestJS + Vue3.

## Design Principles

- Designed from the back-end. All data is routed through a CRUD API, therefore any user can create their own front-end. This opens up the opportunity for users to build their own web page logbooks, desktop applications, or any other integrations all working off the same database.

## Development Environment

### Backend

First, get a MongoDB database setup. Included in the codebase is a work-in-progress Docker Compose setup for the MongoDB, which works in some environments.

As a temporary database solution, you may want to spin up a separate local version of MongoDB, or a free cluster server through [Atlas](https://www.mongodb.com/atlas). The only requirement for any database solution is that it is running MongoDB, and that your API server does have a connection to it.

Once you have successfully edited the .env file in `api` to match your database setup, run `npm install` to download all dependencies. Once all dependencies are installed, simply run `npm run start:dev` to run an automatically reloading development server.

### Frontend

This project's front-end is build using Vue3, with a few other various technologies piled on from the Vue boilerplate template.

In order to get a dev server running for the web client, simply enter the `client` folder, download dependencies with `npm install`, and then run `npm run dev`

## Want to Contribute?

Find a bug in your personal use of the software you want to quickly fix? Feel free to fork the repository and open a pull request with any changes.

See the `Issues` tab for any known issues or wanted features.