let planets = require("../data/planets")
const Joi = require("joi")

planetSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string().alphanum()   
})

const mainController = {
    home: (req, res)=> {
        res.status(200).send('Hello, World!');
    },
    getPlanets: (req, res) => {
        res.status(200).json(planets);
    },
    getPlanetById: (req, res) => {
        const { id } = req.params;
        const requestedPlanet = planets.find(planet => planet.id === Number(id))
        res.json(requestedPlanet);
    },
    error: async(req,res)=>{
        throw new Error("Async error")
    },
    createPlanet: (req, res) => {
        console.log(req.body);
        const { name } = req.body
        const  id  = planets.length+1

        const newPlanet = {id, name} 
        const validation = planetSchema.validate(newPlanet)
        if(validation.error){
            res.status(400).json(validation.error.details[0].message)
            return 
        }
        planets = [...planets, newPlanet]
        console.log(planets); 
        
        res.status(201).json(planets)
    },
    updatePlanet: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        // const changePlanet = planets.find(planet => planet.id === Number(id));

        planets.map((planet) =>{
            if(planet.id === Number(id)){
                planet.name = name
            }
            return planet;
        })
        // changePlanet.name = name;
    
        res.status(200).json(planets)
    },
    deletePlanet: (req, res) =>  {
        const { id } = req.params;
        const newPlanetsArray = planets.filter(planet => {
            return planet.id != Number(id)
        })
        
        res.status(200).json({msg: "success", newPlanetsArray})
    }
}


module.exports = mainController