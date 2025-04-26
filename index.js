import express from "express"
import router from "./route.js"

const app = express()

const PORT = 3000

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World")
})

app.use("/user", router)
app.use(express.json())

// Method POST: Create
app.post("/users", (req, res) => {
    const {name, email} = req.body

    res.json({
        messege: `User ${name} with email ${email} created successfully`
    })
})

// Method PUT: updated
app.put("/users/:id", (req, res) => {
    const userID = req.params.id
    const {name, email} = req.body
    res.json({
        messege: `User ${userID} updated to ${name}, ${email}`
    })
})


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})

