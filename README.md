This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create file `.env` in this directory with content
```dotenv
# URL of running ioc-checker-server
API_URL=...
# URL of running authentication server
AUTH_URL=...
# Path to authorization endpoint that will be concatenated with AUTH_URL
AUTHORIZATION_ENDPOINT=...
# Path to access token endpoint that will be concatenated with AUTH_URL
ACCESS_TOKEN_ENDPOINT=...
# OAuth client id, must taken from authentication server configuration
CLIENT_ID=...
# OAuth client secret, must be taken from authentication server configuration
CLIENT_SECRET=...
```
Example of `.env` file (assuming KeyCloak authentication server)
```dotenv
API_URL=http://127.0.0.1:8080/api/fe
AUTH_URL=http://192.168.126.183:8080/auth"
AUTHORIZATION_ENDPOINT=/realms/Smurfs/protocol/openid-connect/auth
ACCESS_TOKEN_ENDPOINT=/realms/Smurfs/protocol/openid-connect/token
CLIENT_ID=ioc-checker-fe
CLIENT_SECRET=99cc4d4b-3cd5-42ff-9a59-35cd14dd5a91
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
