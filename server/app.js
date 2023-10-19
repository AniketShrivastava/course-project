const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const { useRoutes } = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(
    cors({
    origin:[process.env.FRONTEND_URL],
    Credential: true
})
);

app.use(morgan('dev'));
 app.use(cookieParser());

 app.use("/ping",(req,res)=>{
    res.send("pong")
 });

 app.use('/api/v1/user', useRoutes);



 app.all("*",(req,res)=>{
    res.status(404).send("OOPS!! 4040 page not found")
 })


module.exports = app;