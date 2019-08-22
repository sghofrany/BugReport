# BugReport

This is a simple website I created to teach myself Reactjs.
Right now this uses Nodejs with express to create a simple REST API to get information from the
backend to the front-end. It will eventually use MySQL and a form of Authentication to GET and POST
data via the REST API, but for now it uses hard-coded data.

# How to run 

Once you have cloned the repository you can start the node server using while in the /BugReport folder:

```
node start
```

Then you need to start the reactjs server while in the /client folder using:

```
npm start
```

# API end points

To view the data that is hard-coded in the API you can look directly into the BugReport/server.js file or,
check ```http://localhost:5000/api/bugs``` 
