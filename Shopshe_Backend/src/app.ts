import express from "express";

import userRoute from "./routes/user.js";
import { connectDB } from "./utility/feature.js";

connectDB();
const app = express();
const PORT = 3000;

// * middleware use for json

app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("API Working");
});


// * Using Route
app.use("/api/v1/user",userRoute);




app.listen(PORT, () => {
  console.log(`Express is working on http://localhost:${PORT}`);
});
