## Vote app

Vote App is a web app create with react and typescript to vote for importants characters. [Demo](https://vote-for-me.netlify.com/)

# run

Only you need node and npm/yarn

[Yarn](https://github.com/yarnpkg/)

```sh
yarn install && yarn start

```

Go to [localhos:3000](http://localhost:3000)

# Test and integrations

Run test and linters with hooks

- premessage -> commitlint
- precommit --> prettier,stylelint,lint typescript
- prepush --> build and test

### Run test

```sh
yarn test

```

# Features

- **React router** [react-routing](https://github.com/ReactTraining/react-router)
- **Animations** [react-spring](https://github.com/react-spring/react-spring)
- **Persist** [dexie/indexdb](https://github.com/dfahlander/Dexie.js)
- **Styles** [tailwind](https://github.com/tailwindcss/tailwindcss)
- **Test** [teact-testing-library](https://github.com/testing-library/react-testing-library)

The project makes use of typescript for typing and providing a more organized code, a basic routing built with react router and some animations with an awesome react-spring library.

The styles were created with tailwind, which is an emerging library with more than 14 thousand stars in github, it is based on the use of potscss and not preprocessors, it has a main configuration file which provides control of all styles, In addition to generating a bundle of less than 10 KB, its use is simple and is based on the pattern of utilities first, which from classes builds all the css of the app, causing the cascade of styles to be reused to the maximum and avoiding Write new styles.

# Organization

Modules structure

```
.
├──/src
│
│   ├──/components -> Common components app
│   ├──/pages -> Main views routing
│   ├──/services -> Call api or database local
│   ├──/utils -> Js functions for all project example helpers
│   ├──/assets -> images for the project
├── routes
├── app
├── .env
└── ...others configuration files
```

# Author

Johan Villamil, Made with love :heart:
