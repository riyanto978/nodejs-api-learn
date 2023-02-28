import express from 'express';

const app = express();

app.get('/', (req, res) => {

    res.send({
        "hallo": 4
    })
})

app.listen(3000, () => {
    console.log("server init 3000");

});