const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db");
connectDB();
const app = express();
const path = require("path");

const HomeRoutes=require("./routes/home")
const ProductsRoutes=require("./routes/products")

// app.set("case sensitive routing", true); //DashBoard != dashboard
app.set("appName", "My First Express App"); //TODO g
app.set("port", 3000); 
app.use(morgan("dev"));
app.use(express.json());
app.use(HomeRoutes)
app.use(ProductsRoutes)
// HomeRoutes(app)
// ProductsRoutes(app)
console.log(__dirname);
app.use("/public",express.static(path.join(__dirname, "public"))); //When add "src" manual
// app.use("/public",express.static("./public")); //TODO prefigo -/public/...
//app.get("appName")
app.get("/notes.txt", (req, res) => {
    res.send("Its not a note");
})
app.listen(app.get("port"));
console.log(`Server ${app.get('appName')} is running on port  ${app.get('port')} `);
