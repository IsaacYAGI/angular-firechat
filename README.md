# Firechat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Configuracion del proyecto

1. Crear el proyecto en firebase

1. Crear una copia del archivo src/environments/env.example.ts y renombrarlo a env.ts y colocar dentro las credenciales de firebase correspondientes al proyecto previamente creado en la consola de firebase. Dichas credenciales estan en la pagina principal en la opcion "Agrega firebase a tu web"

1. Habilitar el api de cloud firestore

1. Habilitar la autenticacion con Google

1. Crear una app en twitter y obtener el api key y api secret key

1. Configurar el callback url handler en twitter. Este se obtiene al intentar habilitar el metodo de autenticacion en firebase

1. Habilitar la autenticacion con Twitter en firebase
