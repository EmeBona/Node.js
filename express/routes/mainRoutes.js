const express = require("express")
const router = express.Router()

let planets = [
    {
        id: 1,
        name: "Earth"
    },
    {
        id: 2,
        name: "Mars"
    }
]

router.get('/', (req, res)=> {
    res.status(200).send('Hello, Maria!')
})

router.get('/planets', (req, res) => {
    res.json(planets)
})

router.get('/planets/:id', (req, res) => {
    
    res.json(planets)
})



// app.post('/test', (req, res) =>{
//     console.log(req);
// })

module.exports = router