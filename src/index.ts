import express from 'express';

import dotenv from "dotenv";
import router from './routes/routes';
dotenv.config();

const app = express();
app.use(express.json());
app.use(router)

app.use("/", (req, res) => {
    res.send({
        message: "hgallo"
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`);

});