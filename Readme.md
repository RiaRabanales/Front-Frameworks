## Autor:
Ria Rabanales

Repositorio para prácticas personales en diferentes frameworks de JS (Vue, Angular, ect.) y otras tecnologías relacionadas con NodeJS.


## Comandos relevantes en VUE:
#### Para crear y lanzar proyecto:
> vue create live-chat
> npm run serve


#### Para firebase:
> npm install firebase
> npm install -g firebase-tools  (instala el CLI de hosting en el ordenador - 125)
> firebase login
> firebase init (para configurar front en el proyecto)
> npm run build
> firebase deploy
> (para actualizar cambios) npm run build + firebase deploy


## Comandos relevantes en NODE:
> node (lanza node para poder pasarle cualquier código js por consola)
> node archivo (donde archivo es el nombre de un archivo js sin extensión: lanza el archivo)
* npm install -g nodemon: para no tener que relanzar el servidor node manualmente (instal. global en la máquina); ahora puedo usar 'nodemon archivo.js'
* npm install express: para instalar el gestor de rutas express


#### Para json server:
> npm install json-server
> npx json-server --watch data/db.json


#### Para fechas:
date-fns (120):
> npm install date-fns


## Links:
* Idiomas: https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
* NodeJS Crash Course: https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=1


## Comandos relevantes en Angular:
#### Creación de nuevo proyecto:
> ng new my-project --no-strict
> ng g c miComponente (para crear nuevo componente)
> ng g c auth/signup --module app.module (ejemplo cuando tengo más de un módulo)
> ng serve


#### Añadir Angular Material a un proyecto (22)
Consultar: material.angular.io, https://github.com/angular/flex-layout
> ng add @angular/material
> npm install --save @angular/flex-layout@latest @angular/cdk@latest
