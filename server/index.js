const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 2050
const cors = require('cors')
const Data = require('./Moviemodel')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Moviepeopledata').then(() => {
    console.log("Connted MongoDB");
}).catch((error) => {
    console.log(error);
})


const errorHandle = (error, req, res, next) => {
    console.error(error.message)

    if (error.message === "CastError") {
        res.status(404).json({ message: "Resource not found." })
    } else if (error.name === 'ValidationError') {
        res.status(404).json({ error: error.message })
    }
    next(error)
}

app.post('/login', (req, res) => {
    const { email, password } = req.body
    Data.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

app.post('/singup', (req, res) => {
    
    Data.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(404).json("Internal Server Error");
        });
        
})

app.use(errorHandle)
app.listen(port)