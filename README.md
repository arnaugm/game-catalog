# Game Catalog

Create videogame catalogs.

The app runs in Heroku in https://game-catalog.herokuapp.com

This app is built using Create React App in the front-end which queries an AIOHTTP API in the server.

## Setup

### Python server

- Install Python 3.7, ideally with a virtual environment
  - See how to create a Python virtual environment with [pyenv-virtualenv](docs/PYENV-VIRTUALENV.md)
- Install dependencies
```
make install-dev
```

### React client
- Install Node.js, ideally with a node version manager like [nvm](https://github.com/nvm-sh/nvm)
- Install dependencies
```
cd client && npm install
```

## Run the project

Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) if you want to run Herkou commands (not necessary to run the app locally).
Activate Python's virtual environment, build the client and run both server and client.
```
pyenv activate game-catalog
npm run build && npm run deploy

# run server and client using Heroku CLI
heroku local -f Procfile.dev

# without Heroku CLI, use two terminals
make run                    # server
cd client && npm start      # client
```
React client will be available in `http://localhost:3000` and the AIOHTTP API can be accessed from `http://localhost:8080`.

For faster development, `package.json` configures a proxy using the `proxy` field, and any request to a url that is unknown
for the client, will be redirected to the Python API.

## Testing and linting

### Server linting

```
make black lint
```

### Server tests

```
make test
```

### Client linting

Client linting is executed as a pre-commit hooks thanks husky` and `lint-staged`.

```
cd client
npm run lint:js
npm run lint:scss
```

### Client tests

```
cd client && npm test
````

## Continuous Integration

The project uses [CircleCI](https://circleci.com) to validate changes and its configuration is stored in
`.circleci/config.yml` file.

## Running in production

The Heroku app has two [buildpacks](https://devcenter.heroku.com/articles/buildpacks) configured: a Node.js one which will
build the client and place it in the server public folder, and a Python one to run the API.

NODE_ENV in production is set to `development` with `heroku config:set NODE_ENV=development` because Node.js is only used
to build the client and `devDependencies` are necessary for it.
