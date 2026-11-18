const express = require("express")
let pokemons = require("./mock-pokemon")
let games = require("./game")
let { sucess } = require("./helper")
let numbers = require("./numbers")
let {aki} = require ("./aki")

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

    res.send(`Vous avez demander le ${pokemon.name} comme pokemon`)

})


app.get ("/game" , (req,res)=>{
    res.send("Bienvenue au Serveur de jogame")
})

app.get ("/game/api", (req,res)=>{
    res.send(`Conbien de jeux actuellement possede tu ${games.length} `)
})

app.get ("/game/:code" , (req,res)=>{
    const code = parseInt(req.params.code)
    const jeux = games.find(g => g.code === code)
    const message = "Le jeux a bien etait trouver" 
    
    if(!jeux){
        res.status(401).send("Le jeux n'a pas était trouver")
    }

    res.json(sucess(message,jeux))
})

app.get ("/sucess" ,(req,res)=>{
    const message = "Dimension un monde meilleur un monde juste quel qu'on soit le prix a payer"
    const data = 443

    res.json(sucess(message,data))
})

app.get ("/date", (req,res)=>{
    res.send("Bievenue monsieur numeros 1")
})

app.get ("/date/:eve", (req,res)=>{
    const eve = parseInt(req.params.eve)
    const numero = numbers.find(n => n.eve === eve)
    

     if (!numero){
         return res.status(404).send("Introuvable recommencer svp")
    }
    
    const ems = "Attente de verification"
    const ver = "Verification approuver"

        res.json(aki(ems,ver,numero))
})



    

 app.listen(PORT, ()=>{
    console.log(`Serveur 3 2 1 : http://localhost:${PORT}`)
 })