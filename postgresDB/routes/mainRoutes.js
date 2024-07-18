const express = require("express")
const router = express.Router()
let planets = require("../data/planets")

const mainController = require("../controllers/mainController")


router.get('/', mainController.home)

router.get('/planets', mainController.getPlanets)

router.get('/planets/:id', mainController.getPlanetById)

router.get('/error', mainController.error)

router.post("/planets", mainController.createPlanet)

router.put("/planets/:id", mainController.updatePlanet) 

router.delete("/planets/:id", mainController.deletePlanet)

// app.post('/test', (req, res) =>{
//     console.log(req);
// })

module.exports = router