import express from 'express'
import cors from 'cors'

import { workers } from './database/data.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1', (req, res) => {
    res.send(workers)
})

app.get('/api/v1/menores-de-30', (req, res) => {
    let menores = workers.filter(worker => worker.age <= 30)
    res.send(menores)
})

app.get('/api/v1/edad/:edad', (req, res) => {
    let edad = req.params.edad
    let filtradors = workers.filter(worker => worker.age == edad)
    res.send(filtradors)
})

app.listen(5000, () => console.log('listening on port 5000'))