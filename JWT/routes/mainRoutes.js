const express = require("express")
const router = express.Router()
const multer = require('multer')
const authorize = require('../authorize/authorize')
const passport = require("../passport/passport")


const mainController = require("../controllers/mainController")


router.post("/login", mainController.logIn)

router.post("/signup", mainController.signUp)

router.get("/logout", authorize, mainController.logOut)


// app.post('/test', (req, res) =>{
//     console.log(req);
// })

module.exports = router