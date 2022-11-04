const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"))

////////////////////////////////////////////////////////////////////////////////
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true })) // accept form data //1:11:51
// app.post("/user", (req, res) => {
//     console.log(req.body);
//     console.log("🚀 ~ file: index.js ~ line 12 ~ app.post ~ body", req.body)
//     res.send("user")
// })
//
// app.get("/user/:username", (req, res) => {
//   console.log(typeof req.params.username);
//   res.send(`Hello ${req.params.username.toUpperCase()}`);
// });

app.get("/about", (req,res)=>{
    res.send("about");
})
//TODO: JWT GET Q 
app.use((req,res,next)=>{
    console.log(`paso por aqui - ${req.url} Method: ${req.method}`);
    if(req.query.login === 'r@g.c'){
        next();
    }
    else{
        res.send('No tienes permisos');
    }
})
//page dash board

app.get("/profile", (req,res)=>{
    res.send("profile");
})

app.get("/search", (req, res) => {
    //http://localhost:3000/search?q=javascript%20books
    if(req.query.q==="javascript books"){
        res.send("list books js")
    }
    else{
        res.send("normal search")
    }
  });
app.get("/user/:username", (req, res) => {
    //http://localhost:3000/user/ronald?user=dario&user=ronald 
    //req.query={user: ["dario", "ronald"]}
    //http://localhost:3000/user/ronald?age=10&user=ronald
    console.log(req.query.age); 
    console.log(req.query.user); 
    res.send(`Hello ${req.params.username.toUpperCase()}`);
  });
app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  console.log(result);
  // res.send(result.toString())
  res.send(`result : ${result}`);
});
app.get("/users/:username/photo",(req,res)=>{
    if(req.params.username === "admin"){
        return res.sendFile("./javascript.png",{root:__dirname})
    }else{
        res.send("user declined")
    }
})
//
app.post("/user", (req, res) => {
    console.log("🚀 ~ file: index.js ~ line 13 ~ app.post ~  req.body",  req.body);
    res.send("user")
})
app.get("/myFile", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});
app.get("/user", (req, res) => {
  res.json({ name: "John", age: 30 });
});
app.get("/isAlive",(req,res)=>{
    res.sendStatus(204)//204 means no content
})
// app.use((req, res) => {
//   res.status(404).send("Page Not Found");
// });

app.listen(3000);
console.log("Server is running on port 3000");
