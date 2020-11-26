# My personal resumé website

This is my personal resumé built with [React](https://reactjs.org), [Styled System](https://styled-system.com) and [styled-components](https://styled-components.com) located on [GitHub Pages](https://perjansson.github.io).

The setup includes using GitHub actions as a CI/CD pipeline which builds, tests, performance measueres and deploys every commit.

## Get started

### Local dev

`$ yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production build

`yarn build`

Builds the app for production to the `build` folder.

### Deploy to production

Just push to GitHub `main` branch and GitHub actions will run Smoke Test -> Lighthouse -> Build -> Deploy
