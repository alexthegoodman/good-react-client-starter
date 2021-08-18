# Good React Client Starter (2019)

Welcome

## Getting Started

Copy `.env.example` to `.env`

`yarn`
`yarn dev:client`

## Deploy

`heroku login`
`heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git`
`heroku plugins:install heroku-cli-static`

`yarn build:client`
<!-- `yarn heroku:deploy` -->
`heroku static:deploy`