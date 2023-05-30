const express= require ('express')
const app= express()
const cors=require('cors')
const dotenv= require('dotenv').config()
const PORT=process.env._PORT
const mainRouter=require('./Routes/Routes')
const {AuthRouter}=require('./Routes/Athorization.Routes')
const connected= require('./mongo/connection')

app.use(cors())
app.use(express.json())
app.use(mainRouter)
app.use(AuthRouter)






app.listen(PORT,()=>{
    console.log(`servidor escuchando en ${PORT}`)
})
