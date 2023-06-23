const express = require('express')
const mongoose = require('mongoose')
const app = express();

const url = "mongodb+srv://pietfogo25:5ZlWp0kRCzxQsOdz@cluster0.wfac1bt.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(url)
        console.log("Conexão feita com sucesso!!!")
    }
    catch (error){
        console.log(error);
    }
}

connect()

app.listen(8000, () => (
    console.log("AEEEEEE CARALHO, o server iniciou na porta 8000!")
));
