# ImageSelector

I have refactor the code using Angular 17 and NVM 18.17.1

Image-api-project - Server
Image-selector - Client

Server
- Open terminal run 'brew install yarn' (if you do not have yarn in your mac)
- Open API project in VisualStudio Code
- run command 'yarn install'
- run command 'node server.js' 

Client
- Delete package-lock.json
- Run command 'nvm use 18'
- Run command 'npm install'
- Run command 'ng serve'

- I have use Angular Material UI to achieve this
- To make it responsive I have use Flexbox

Other ways to achieve this
- Here, I have created a project using different components
- Right now, I have not created a service here, but we can create a singular service to call all HTTP services on the page.
- We can use other ways to achieve this, such as app.component.html, which will generate all UI on a single page. 
- Create a GitHub library. Store this component as an NPM package and use it wherever required. 
