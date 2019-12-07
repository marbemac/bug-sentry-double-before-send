This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To demonstrate the double Sentry send bug:

1. `yarn`
2. `yarn start`
3. Open to `http://localhost:3000/`
4. Click the `Throw Error` button on middle of page, and note double events logged in browser developer console.

Relevant sentry config at `./src/sentry.js`.
