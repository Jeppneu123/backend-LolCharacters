const express = require("express");
const cors = require("cors");
const app = express();
const port = 3333;
// Your gitHub page origin has to be written EXACTLY like this! https://behu-kea.github.io
const URL_FOR_FRONTEND = "YOUR_GITHUB_PAGE_ORIGIN_HERE";

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// If the application is running localhost allow all requests,
// otherwise add cors for specific website
// Remember to add the NODE_ENV="prod" on server!
const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);

// ========== Import / require posts from data.js ========== //
let posts = require("./data")
const {request} = require("express");
console.log(newPostLolCharacters);

// ========== REST API Implementation ========== //

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// ========== READ: read all posts from posts ========== //
app.get("/legends", (req, res) => {
    return res.json(posts);
});

// ========== READ: get post by id ========== //
app.get("/legends/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.find(item => item.id == id);
    return res.json(post);
});

app.listen(port, () => {
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});


app.post ("/legends",(request,response) => {
    let newPost = request.body;
    newPost.id = Date.now();
    posts.push(newPost);
    return response.json(newPost)
})

app.delete ("/legends/:id", (request,respons)=> {
    const id = request.params.id;
    posts = posts.filter(post => post.id != id);
    return response(posts);
});