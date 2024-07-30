import express from 'express';



// * Imorting Route
import userRoute from './routes/user.js'






// * Using Routes

app.use("/api/v1/user",userRoute)
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express is working on http://localhost:${PORT}`);
});
