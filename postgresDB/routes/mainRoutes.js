const express = require("express")
const router = express.Router()
const multer = require('multer')
let planets = require("../data/planets")

const mainController = require("../controllers/mainController")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'assets/')
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
})

const upload = multer({storage: storage})

router.get('/', mainController.home)

router.get('/planets', mainController.getPlanets)

router.get('/planets/:id', mainController.getPlanetById)

router.get('/error', mainController.error)

router.post("/planets", mainController.createPlanet)

router.put("/planets/:id", mainController.updatePlanet) 

router.delete("/planets/:id", mainController.deletePlanet)

router.post("/planets/:id/image", upload.single('planet-image'), mainController.addPlanetImage)


// app.post('/test', (req, res) =>{
//     console.log(req);
// })

module.exports = router