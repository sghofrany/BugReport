const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

//MySQL connection

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "bugsdb"
    }
);

db.connect((err) => {
    if(err) {
        console.log(err);
    }

    console.log("Connected to MySQL Successfully!");
});

const app = express();

app.use(cors());



app.get('/', (req, res) => {
    res.send('go to /api to see more info')
});

app.get('/api/forums', (req, res) => {
    res.json({
        
            forum_posts: [
                {
                    id: 0,
                    title: "Title 1",
                    body: "This is the body of the forum post",
                    user: "Irantwomiles",
                    likes: 0,
                    date: "10/18/1997"
                },
                {
                    id: 1,
                    title: "Title 2",
                    body: "This is the body of the forum post",
                    user: "Shawn",
                    likes: 28,
                    date: "10/18/1997"
                }
            ]
    
        });
});

app.get('/api/bug', (req, res) => {
    res.json({
        "bugs":[    
            {
                "id": 0,
                "title": "Bug 1",
                "body": "This is the body of the forum postThis is the body of the forum BUG 1",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 1,
                "title": "Bug 2",
                "body": "This isThis is the body of the forum the body of the forum post BUG 2",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },  
            {
                "id": 2,
                "title": "Bug 3",
                "body": "This is the boThis is the body of the forumThis is the body of the forumdy of the forum post BUG 3",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 3,
                "title": "Bug 4",
                "body": "This is the body of the forumThis is the body of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 4,
                "title": "Bug 5",
                "body": "This is the bThis is the body of the forumody of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 5,
                "title": "Bug 6",
                "body": "This is the This is the body of the forumThis is the body of the forumThis is the body of the forumbody of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 6,
                "title": "Bug 7",
                "body": "This is tThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumhe body of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 7,
                "title": "Bug 8",
                "body": "This is the body of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 8,
                "title": "Bug 9",
                "body": "This is the body of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 9,
                "title": "Bug 10",
                "body": "This is the body of the This is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumforum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 10,
                "title": "Bug 11",
                "body": "This is the body of the This is the body of the forumThis is the body of the forumforum post BUG 4",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 11,
                "title": "Bug 12",
                "body": "This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum This is the body of the forum",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            },    
            {
                "id": 12,
                "title": "Bug 13",
                "body": "This is the This is the body of the forumThis is the body of the forumThis is the body of the forumbody of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "solved",
                "date": "10/18/1997"
            },    
            {
                "id": 13,
                "title": "Bug 14",
                "body": "TThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumThis is the body of the forumhis is the This is the body of the forumThis is the body of the forumThis is the body of the forumbody of the forum post BUG 4",
                "user": "Irantwomiles",
                "status": "pending",
                "date": "10/18/1997"
            }                  
    ]}  );
});

app.get('/api/bugs', (req, res) => {

    db.query("SELECT * FROM bug", (err, results) => {
        
        if(err) {
            return res.send("didnt run");
        } else {
            return res.json({
                data: results
            });
        }

    });

});

app.listen(5000, () => {
    console.log("Listening to port 5000...");
});
