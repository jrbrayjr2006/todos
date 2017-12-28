# Todos

This project is the client-side component of a project to test some frameworks and programming patterns.  This project is built on Angular 5 and Bootstrap 4.  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to Pivotal Cloud Foundry (PCF)

Deploying this app to PCF is straight forward.
1.  Build a production version of the app using `ng build prod`
2.  Change to the dist directory by `cd dist`
3.  Login to PCF `cf login -a api.run.pivotal.io`
4.  Push the application
```
cf push -b staticfile_buildpack todos
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
