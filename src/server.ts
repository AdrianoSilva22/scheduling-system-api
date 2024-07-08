import cors from 'cors'
import * as dotenv from "dotenv"
import express from 'express'
import { RouterUser } from './routes/user'

const app = express()

const PORT = parseInt(process.env.PORT || '8085', 10)

app.use(cors())

dotenv.config()

app.use(express.json())

app.use(new RouterUser().getRouter())

app.listen(PORT, () => console.log(`funcionando na porta ${PORT}`))