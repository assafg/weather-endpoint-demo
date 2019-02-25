A monorepo for Apollo-Graphql talk / Workshop

## Creating the Endpoint
```bash
$ mkdir weather-endpoint
$ cd weather-endpoint
$ yarn init && yarn add apollo-server graphql dotenv request request-promise-native
```

## Creating the react app
```bash
$ npx create-react-app weather-app && cd weather-app
$ yarn add apollo-boost react-apollo graphql
```

## running the apps
```bash
$ yarn workspace weather-endpoint start
$ yarn workspace weather-app start
```
