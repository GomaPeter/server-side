const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");
const app = express();

//middleware
app.use(express.json());
app.use(morgan("tiny"));


//route
app.get("/", (req, res) =>{
    res.send('hello world');
});

//server configuration
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`server listening on port: ${PORT}`)
} catch (error) {
    console.log(err);   
}  
});