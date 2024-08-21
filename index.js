import app from "./app.js"
import { connectDB } from "./db/mongoClient.js"

const PORT = 4000
connectDB()
app.listen(PORT, () => {
    console.log(`Server on port #${PORT}`)
})
