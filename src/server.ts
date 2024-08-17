import cors from 'cors'
import * as dotenv from "dotenv"
import express from 'express'
import { RouterUser } from './routes/user'
import { RouterAvailableSchedule } from './routes/availableSchedule'
import { RouterScheduling } from './routes/scheduling'
import { RouterAuthUser } from './routes/auth'

const app = express()

const PORT = parseInt(process.env.PORT || '8085', 10)

app.use(cors())

dotenv.config()

app.use(express.json())

app.use(new RouterUser().getRouter())

app.use(new RouterAvailableSchedule().getRouter())

app.use(new RouterScheduling().getRouter())

app.use(new RouterAuthUser().getRouter())

app.listen(PORT, () => console.log(`funcionando na porta ${PORT}`))