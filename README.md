![coderally Logo](./docs/logo.png)

# CodeRally Backend

A project listing board for app and web developers
Powered by [https://nodejs.org/](NodeJS), [http://expressjs.com/](Express), and [https://github.com/hapijs/joi](Joi).

Hosted at on [Google App Engine](https://cloud.google.com/appengine/).

Frontend React app for this project is located here: https://github.com/TheWillG/CodeRally.git.

## Install

`git clone https://github.com/TheWillG/CodeRally-API.git`

`cd CodeRally-API`

`npm install`

## Run

`npm run start`

## Testing

`npm run test`

Tests are located at *\_\_tests__*

## Environment

| Name | Description | Example |
|------|-------------|--------|
| PORT | Port the app is run on. | 3000 |
| LOGGER_LEVEL | Logger level configuration used by `log4js` package | info |

The environment variables are encrypted from *env* to *env.enc*.

## CI/CD

We use Google Cloud Build and Google App Engine for continuous integration and deployment.

| File | Description |
|------|-------------|
| *app.yaml* | Configurations for deployment on Google App Engine |
| *cloudbuild.yaml* | Configurations for integration testing, **non**-master branch, on Google Cloud Build |
| *cloudbuild.prod.yaml* | Configurations for integration testing, master branch, on Google Cloud Build |

**These files should be NOT edited by anyone except the original maintainers.**

Our Google App Engine and Google Cloud Project have also been configured to help with the CI/CD pipeline.

## Contributing

We are always willing to accept contributions to this project.

## Contributors

[Will Garcia](https://github.com/thewillg/) ([LinkedIn](https://www.linkedin.com/in/thewillg/))