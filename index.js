import express from "express"
import router from "./route.js"

const app = express()

const PORT = 3000

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World")
})

app.use("/user", router)

// Method POST 
app.post("/users",  express.json(), (req, res) => {
    const {name, email} = req.body

    res.json({
        messege: `User ${name} with email ${email} created successfully`
    })
})


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})

