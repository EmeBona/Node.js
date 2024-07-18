require('dotenv').config()
require("express-async-errors")
const express = require("express")
const morgan = require ("morgan")
const app = express()
const port = process.env.PORT;
const routes = require("./routes/mainRoutes")



//MIDDLEWARES
app.use(express.json())
app.use(morgan("tiny"))
app.use("/", routes)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({error: err.message})
})


//EXECUTE LISTEN
app.listen(port, ()=>{
    console.log(`Server listening http://localhost:${port}`);
});
