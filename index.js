import express from 'express'
import cors from 'cors'

import { workers } from './database/data.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.write('<h1>Welcome!</h1>')
  res.write('<p>This is an example of how to make an API with Express and Node.js</p>')
  res.write('<p>Made by Joaquin: <a href="https://github.com/forjoa/workers" target="_blank">GitHub Repo</a></p>')
  res.end()
})

app.get('/api/v1', (req, res) => {
  res.send(workers)
})

app.get('/api/v1/menores-de-30', (req, res) => {
  let menores = workers.filter((worker) => worker.age <= 30)
  res.send(menores)
})

app.get('/api/v1/edad/:edad', (req, res) => {
  let edad = req.params.edad
  let filtrados = workers.filter((worker) => worker.age == edad)
  res.send(filtrados)
})

app.get('/api/v1/role/:role', (req, res) => {
  let role = req.params.role
  let filtrados = workers.filter(
    (worker) => worker.role.toLowerCase() == role.toLowerCase()
  )
  res.send(filtrados)
})

app.listen(5000, () => console.log('listening on port 5000'))
