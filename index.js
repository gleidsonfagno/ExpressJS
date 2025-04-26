import express from "express"
import { aboutController, contactController, searchController, usernameController } from "./controller.js"

const app = express()

const PORT = 3000

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World")
})

//About route
app.get("/about", aboutController)

// Contact route
app.get("/contact", contactController)

// Route Dinamic
app.get("/user/:username", usernameController)

// /search?keyword=express or =node.js
app.get("/search", searchController)


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})

