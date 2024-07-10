require('dotenv').config()
const express = require("express")
const morgan = require ("morgan")
const app = express()
const port = process.env.PORT;
const routes = require("./routes/mainRoutes")


//MIDDLEWARES
app.use(express.json())
app.use(morgan("tiny"))
app.use("/", routes)


//EXECUTE LISTEN
app.listen(port, ()=>{
    console.log(`Server listening http://localhost:${port}`);
})
