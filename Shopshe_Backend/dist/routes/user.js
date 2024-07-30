import express from "express";
const app = express.Router();
app.post("/new", newUser);
export default app;
