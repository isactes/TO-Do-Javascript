// load environment variables
import express from "express"
import cors from "cors"
import "./loadEnvironment.mjs"
import "express-async-errors"
import posts from "./routes/posts.mjs"

const PORT_ISACTES = process.env.ISACTES_PORT || 5050;
const app =  express();
app.use(cors());
app.use(express.json());

// load the posts routes
app.use("/posts", posts)

// global error handing
app.use((err, _req, res, next) => {
  res.status(500).send("💀 erro at index & an unexpected error")
})

// start express server
app.listen(PORT_ISACTES, () => {
  console.log(`🛫 Server is running ${PORT_ISACTES}`)
})
