# money

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Docker deploy

```bash
docker build . -t money-web
docker run -d -p 8000:8000 money-web
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
