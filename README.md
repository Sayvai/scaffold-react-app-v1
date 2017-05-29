# React App Starter (scaffold)

The intent of this project is to scaffold a basic react app using the latest tooling and libraries available today.

This is more a self-taught React playground, whereby i learn and discover more about React as i work through this simple personal project.

It is early days and still a work in progress. My current oustanding tasks (with associated issue numbers) are listed below:

* ~~Improve basic styling to component UIs ([issue #6](https://github.com/Sayvai/scaffold-react-app-v1/issues/6))~~
* Integrate Static-Typing ([issue #7](https://github.com/Sayvai/scaffold-react-app-v1/issues/7))

Styling and functionality will be minimal as to allow for the flexbility of this project to be expanded according to various requirements by way of forking (or simply a copy)

This project currently **mainly** comprises of the following tech stack dependencies:

 * [react-dom](https://facebook.github.io/react/docs/react-dom.html) (15.5.4)
 * [react-redux](https://github.com/reactjs/react-redux) (5.0.4)
 * [react-router-dom](https://github.com/reacttraining/react-router) (4.1.1)
 * [redux-thunk](https://github.com/gaearon/redux-thunk) (2.2.0)
 * [whatwg-fetch](https://github.com/whatwg/fetch) (2.0.3)
 * [webpack](https://webpack.github.io/) (2.4.1)
 * [babel](https://github.com/babel/babel) (6.24.1)
 * [eslint](https://github.com/eslint/eslint) (via airbnb lint rules)
 * [jest](https://facebook.github.io/jest/) (19.0.2)
 * [nodeJS](https://nodejs.org/) (7.7.1)
 * [yarn](https://github.com/yarnpkg/yarn) (0.23.4)

Note, this project enforces ES2015+ linting, and would show lint errors within your IDE of choice. This is to sustain coding standards.

The unit tests are structured in a way so that each unit test file sits in the same directory as the source code that is being tested against. This is to further encourage unit tests to be written for each component that is created.


### Running the project:

#### Pre-requisites
Since this is a [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) project, you will need to ensure that both are installed on your system.

#### Spin up the local dev server

* Run `yarn start` in your terminal

That's it! Once the local server successfully starts up, just load the UI on http://localhost:8080
