import express from "express";
import router from "./route.js";

const app = express();
const PORT = 3000;

app.use("/public", express.static("public"))
app.use("/images", express.static("images"))

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express")
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
