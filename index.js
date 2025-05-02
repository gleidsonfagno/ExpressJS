import express from "express";
import router from "./route.js";

const app = express();

const PORT = 3000;

// app.use((req, res, next) => {
//   console.log("Start");

//   res.on("finish", () => {
//     console.log("End");
//   });
//   next();
// });



// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/error", () => {
  throw new Error("This is test error")
})

app.use((err,req,res,next) => {
  console.error(err.message)
  res.send("Internal Server Error")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
