imp question interview

preclass
https://codesandbox.io/s/white-forest-scchmq?file=/src/components/Timer.jsx

Unmount phase :- we will remove the Component from the UI & will render a new Component on the UI

2-Unmounted from the UI
this is fine/not fine
1000 component -1000 API calls
-this is memory leakage & its lot of load bcs of API fetch

2.seach json server in braveBrowser->copy npm i json-server->paste in terminal run

-to start the json-server:-in terminal method.1] npx json-server db.json --port 8080 --watch
2]package.json scripts->write "server":"json-server db.json --port 8080 --watch"->open new terminal run->npm run server(one db.json is created)

click on http://localhost:8080 
2.go to routes by typing /posts http://localhost:8080/posts

db.json
deleted
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }

  make Todo Component
  input tag btn ->POST

  "learn todo"-Show on UI -GET REQUEST-->READ

  -Not Completed to Completed -->PATCH REQUEST
 
 -when we click delete btn -->DELETE REQUEST
