const express = require("express")
let pokemons = require("./mock-pokemon")

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/" , (req,res)=>
    res.send("Bienvenue dans ton premier serveur de Node.js ")
)
app.get("/pokemon/api" , (req,res)=>{
        res.send(`Il y'a environ ${pokemons.length} pokemon actuellement  `)
    })
app.get("/pokemon/:id" , (req ,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemons => pokemons.id === id)

    if(!pokemon){
        return res.status(400).send("Pokemon introuvable")
    }
    res.send(`Vous avez demander le ${pokemon.name}comme pokemon`)
})

    

 app.listen(PORT, ()=>{
    console.log(`Serveur 3 2 1 : http://localhost:${PORT}`)
 })