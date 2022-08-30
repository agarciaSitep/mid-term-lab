![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Mid term project

## Introduction

In this project, you’re going to be building and deploying your first fully responsive website using the technologies you’ve learned so far: HTML, CSS & JavaScript.

Later in the course, you’re going to learn how to create more complex web applications using Vue.js on top of JavaScript. However, it’s important that you practice the basic coding skills you’ve learned so far before moving on to more complex tasks.

## Technical Requirements

- Your website should be rendered in a browser.
- Include separate HTML / CSS / JavaScript files.
- Have a repo on GitHub.
- Have at least 1 commit per day that you worked on it.
- Be deployed online using Netlify so that anybody can access it.
- Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles.

In summary, for this project, you’ll have to recreate a pre-existing design using your HTML & CSS skills. You’ll also have to create a few interactions with the DOM, using what you’ve learned about JavaScript so far.

Finally, you’ll have to deploy this project to Netlify, using the Git CLI to do so. When you’re finished, you’ll have your first website live and ready for anyone to interact with it!

## Web responsiveness

As is the case with most professional projects, for this task you’ve received a design prepared for a desktop screen. However, as you know by now, you always need to keep mobile devices in mind.

One of the main challenges of this project is to adapt the existing design to all screen sizes. You are free to modify any aspect of the website as you see fit in order to make it compatible with mobile devices.

- Todos las secciones con columnas deben tener una sola columna en mobile. Excepto la sección de clientes, que puede tener dos o tres, y el navbar que podemos adaptar según veamos.
- eliminar el padding general del documento.
- en el formulario, los campos de email y teléfono deben ir uno debajo de otro y ocupar el mismo ancho que el resto de campos.

## Deta:
 - X-API-Key: a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H
 - URL: https://database.deta.sh/v1/a0wwnrex/contactmessages/items
 
## Validación formulario:

Todos los campos son requeridos. Al menos 50 caracteres para el message y que el teléfono empiece con +.
Si es válido enviamos los datos al endpoint de Deta, limpiamos el formulario y mostramos un mensaje de confirmación.
Si no es válido, mostramos un mensaje de error. En ningún caso el formulario debe enviarse (no debe recargarse la página).

## Submission

Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

## Deployment

The last task of this project is to actually deploy your website once it’s completed. For this particular project, we’ll be using Netlify, a static web page hosting service.

Deploying to Netlify is pretty simple: you just need to create an account, connect it to your Github repository and enter a few commands in your CLI; and you’re good to go.

