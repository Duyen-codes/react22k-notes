# A responsive CRUD App with local JSON server

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

### The project

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- Fill in the form, submit
- Data from form inputs only get posted to JSON server once users confirm to post in the popup window

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React] (https://reactjs.org) - JS library

### What I learned

Recap over some of my major learnings while working through this project:

- Minimize using extra wrapping div whenever possible
- Created fake JSON endpoint for getting, posting, editing and deleting data from server
- Json server starts running on port 3000 by default, but since projects created using npx create-react-app reserve port 3000, an alternate port must be defined, in this case port 3001 for the json-server.

- Start Json-server from the project root directory with the command:

```
npm run server
```

- navigate to the address to see notes data that are previously written to the db.json file
  (address)[http://localhost:3001/notes]
- use axios library instead of fetch to pull data from the server.
- install axios from the command line using

```
npm install axios
```

- install json-server as a development dependency (only used during development) by executing the command:

```
npm install json-server --save-dev
```

- make a small addition to the scripts part of the package.json file:

```
{
  "scripts": {
    //...
    "server": "json-server -p3001 --watch db.json"  },
}
```

- To run json-server, the react app and commit changes to github simultaneously, it is necessary to use 2 terminal windows. One to keep json-server running, one to run react-app, and another for committing changes to github.

- fetch data from a server inside useEffect in case React components defined as functions - the so-called functional components, and inside componentDidMount in case class components.

- the function useEffect takes 2 parameters: the first is a function, the second parameter of useEffect is used to specify how often the effect is fun. If the 2nd para is an empty array [], then the effect is only run along with the first render of the component.

#### Deployed with vercel

### Continued development

What I would like to continue focusing on in future projects:

- Responsive layout and design

Concepts I'm still not completely comfortable with or techniques I have found useful that I want to refine and perfect:

### Useful Resources

- (Fullstakopen 2022)[https://fullstackopen.com/en/part2/getting_data_from_server]
- (Chrome plugin JSON-data view:)[https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc]
- (Axios: ) [https://github.com/axios/axios]
- Various ways to deploy React app: [https://blog.logrocket.com/8-ways-deploy-react-app-free/#vercel]

## Acknowledgments
