import express from "express";
import router from "./routes/show.routes.js";

const app = express()
app.use(express.json())
app.use('/api', router)

const port = 8000

app.listen(port, console.log(`Listening on port: ${port}`))
