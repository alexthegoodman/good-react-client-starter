# Good React Client Starter

Welcome

## Getting Started

Copy `.env.example` to `.env`

`yarn`
`yarn dev:client`

## Test

Start the client first

`yarn test:integration` launches Cypress

## Deploy

`heroku login`
`heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git`
`heroku plugins:install heroku-cli-static`

`yarn build:client`

<!-- `yarn heroku:deploy` -->

`heroku static:deploy`

## Todo

- Remove unused dependencies
