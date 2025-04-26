import express from "express"

const app = express()

const PORT = 3000

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World")
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})

// {
//     "name": "express",
//     "version": "1.0.0",
//     "main": "index.js",
//     "scripts": {
//       "start": "nodemon index.js"
//     },
//     "repository": {
//       "type": "git",
//       "url": "git+https://github.com/gleidsonfagno/ExpressJS.git"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "type": "module",
//     "bugs": {
//       "url": "https://github.com/gleidsonfagno/ExpressJS/issues"
//     },
//     "homepage": "https://github.com/gleidsonfagno/ExpressJS#readme",
//     "dependencies": {
//       "express": "^5.1.0"
//     },
//     "devDependencies": {
//       "nodemon": "^3.1.10"
//     }
//   }
  