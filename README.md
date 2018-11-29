## About this project 

This project is built as an interview project for Xapo. This project uses Facebook's public API to get list of Facebook's open source projects. This project can be used on the web https://xapofacebook.herokuapp.com/ (NOTE: if the is loading up it is due to Heroku restarting the server.  Please try loading the again in a minute or two. Since the app is deployed on a free instance it has to start up dynamo which can take a few moments).

## How to run this app

You have to first install the dependencies for the project using 
`npm install`
and then
`npm start` in order to run it 

However if you want to run this application on the it is deployed on Heroku. The link can be found on the section above.



## Functionalities 
- You can see a list of all projects from Facebook on the right side of the screen 
- Clicking each one will give you more info which includes 
   - A break down of the projects languages and it statitics 
   - List of contributors
   - Readme file for the project
   - Description and name 
- You can search for projects using the text field on the top right hand corner. (NOTE: the search only searches by name for now)

## Stack 
For this project the following stack was used:
- React 
- Redux
- Redux-saga 
- Axios
- Material UI
- lodash
- Chart.js
- Moment (for time conversions)

## Test plan 
Since the app is very small we are mostly going to testing each part of the app in isolation. We will be using Jest and Enzyme for unit testing. We shall be testing:
- Reducers 
- Components (if the component renders all the correct components and elements based on props)
- Sagas: for testing if all the approriate puts have been called and all apis have been called
