import exp from "constants";
import  express  from "express";
import { deflate } from "zlib";


const app = express.Router();

app.post("/new",newUser);
export default app;
