# ImageSelector

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#I have refactored the code using Angular 17 and NVM 18.17.1

- Image-api-project - Server 
- Image-selector - Client

# Server

- Open the terminal and run 'brew install yarn' (if you do not have yarn in your Mac)
- Open API project in VisualStudio Code
- run command 'yarn install'
- run command 'node server.js'
  
# Client

- Delete package-lock.json 
- Run command 'nvm use 18' 
- Run command 'npm install' 
- Run command 'ng serve'
  
- I have used Angular Material UI to achieve this 
- To make it responsive, I have used Flexbox
- 
Other ways to achieve this

- Here, I have created a project using different components
- I have not created a service here, but we can make a singular service to call all HTTP services on the page.
- We can use other ways to achieve this, such as app.component.html, which will generate all UI on a single page.
- Create a GitHub library.  You can store the component as an NPM package and use it wherever required.
