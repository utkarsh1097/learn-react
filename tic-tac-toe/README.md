# Utkarsh-Memo

- `Create React App` uses `html-webpack-plugin` to generate the "webpack" for this application. Source: [LogRocket](https://blog.logrocket.com/getting-started-with-create-react-app)
  - ["Webpack"](https://webpack.js.org/concepts/) is used to bundle all the JS files used in the webapp into a single source for network optimization, and can also aid development (tree shaking, process TS/SCSS sources, hot reloading etc.)
- Broadly speaking, a `component` can be written in 2 distinct ways:
  - Class-based approach. This component can be stateless or stateful.
  - Functional approach. These components used to be stateless, but with the release of [`Hooks`](https://legacy.reactjs.org/docs/hooks-intro.html) in version 16.8, it is possible to assign & manage the state of a functional component.
  Read more about it here: [React Hooks and the component lifecycle](https://retool.com/blog/the-react-lifecycle-methods-and-hooks-explained#react-hooks-and-the-component-lifecycle)

-----

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
