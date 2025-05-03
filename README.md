# Node.js Express & MongoDB: CRUD Rest APIs

For more detail, please visit:
> [Node.js, Express & MongoDb: Build a CRUD Rest Api example](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/)

Front-end that works well with this Back-end
> [Axios Client](https://www.bezkoder.com/axios-request/)

> [Angular 8](https://www.bezkoder.com/angular-crud-app/) / [Angular 10](https://www.bezkoder.com/angular-10-crud-app/) / [Angular 11](https://www.bezkoder.com/angular-11-crud-app/) / [Angular 12](https://www.bezkoder.com/angular-12-crud-app/) / [Angular 13](https://www.bezkoder.com/angular-13-crud-example/) / [Angular 14](https://www.bezkoder.com/angular-14-crud-example/) / [Angular 15](https://www.bezkoder.com/angular-15-crud-example/) / [Angular 16](https://www.bezkoder.com/angular-16-crud-example/) / [Angular 17](https://www.bezkoder.com/angular-17-crud-example/)

> [Vue 2 Client](https://www.bezkoder.com/vue-js-crud-app/) / [Vue 3 Client](https://www.bezkoder.com/vue-3-crud/) / [Vuetify Client](https://www.bezkoder.com/vuetify-data-table-example/)

> [React Client](https://www.bezkoder.com/react-crud-web-api/) / [React Redux Client](https://www.bezkoder.com/react-redux-crud-example/)

## More Practice
> [Server side Pagination in Node.js with MongoDB and Mongoose](https://www.bezkoder.com/node-js-mongodb-pagination/)

> [Node.js Express File Upload to MongoDB example](https://www.bezkoder.com/node-js-upload-store-images-mongodb/)

Security:
> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://www.bezkoder.com/node-js-mongodb-auth-jwt/)

Associations:
> [MongoDB One-to-One relationship tutorial with Mongoose examples](https://www.bezkoder.com/mongoose-one-to-one-relationship-example/)

> [MongoDB One-to-Many Relationship tutorial with Mongoose examples](https://www.bezkoder.com/mongoose-one-to-many-relationship/)

> [MongoDB Many-to-Many Relationship with Mongoose examples](https://www.bezkoder.com/mongodb-many-to-many-mongoose/)

Fullstack:
> [Vue + Node.js + Express + MongoDB example](https://www.bezkoder.com/vue-node-express-mongodb-mevn-crud/)

> [Angular 8 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-mongodb-node-express/)

> [Angular 10 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-10-mongodb-node-express/)

> [Angular 11 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-11-mongodb-node-js-express/)

> [Angular 12 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-12-mongodb-node-js-express/)

> [Angular 13 + Node.js + Express + MongoDB example](https://www.bezkoder.com/mean-stack-crud-example-angular-13/)

> [Angular 14 + Node.js + Express + MongoDB example](https://www.bezkoder.com/mean-stack-crud-example-angular-14/)

> [Angular 15 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-15-node-js-express-mongodb/)

> [Angular 16 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-16-node-js-express-mongodb/)

> [Angular 17 + Node.js + Express + MongoDB example](https://www.bezkoder.com/angular-17-node-js-express-mongodb/)

> [React + Node.js + Express + MongoDB example](https://www.bezkoder.com/react-node-express-mongodb-mern-stack/)

Integration (run back-end & front-end on same server/port)
> [Integrate React with Node.js Restful Services](https://www.bezkoder.com/integrate-react-express-same-server-port/)

> [Integrate Angular with Node.js Restful Services](https://www.bezkoder.com/integrate-angular-12-node-js/)

> [Integrate Vue with Node.js Restful Services](https://www.bezkoder.com/serve-vue-app-express/)

## Project setup
```
npm install
```

### Run
```
node server.js
```
# 🧠 Git Workflow del Proyecto

## Ramas principales
- `main`: rama de producción. Solo recibe cambios desde `testing` mediante Pull Request.
- `testing`: rama de integración. Aquí se integran las funcionalidades y se hacen pruebas.
- `develop`: rama de desarrollo. Aquí se integran las funcionalidades en desarrollo.

## Ramas por desarrollador
Cada desarrollador crea ramas así:
- `dgutierrez/feature-login`
- `jmayorga/bugfix-header`
- `croldan/refactor-form`

## Flujo de trabajo
1. Crear una rama desde `develop` para cada funcionalidad o bugfix.
2. Hacer `push` a la rama creada.
3. Crear un Pull Request desde la rama creada hacia `testing`.
4. Revisar el Pull Request y hacer merge a `testing`.
5. Probar la funcionalidad en `testing`.
6. Si todo está bien, crear un Pull Request desde `testing` hacia `main`.
7. Revisar el Pull Request y hacer merge a `main`.
8. Desplegar la aplicación desde `main`.
9. Si hay errores, crear un nuevo Pull Request desde `develop` hacia `testing` para corregir el error.
10. Repetir el proceso hasta que todo esté en producción.

## Revisión de código
- Cada Pull Request debe ser revisado por al menos un compañero.
- Se deben dejar comentarios y sugerencias en el Pull Request.
- Se deben resolver todos los comentarios antes de hacer merge.


## Reglas
- ❌ No se hace `push` directo a `main`
- ✅ Toda integración pasa por Pull Requests y revisiones