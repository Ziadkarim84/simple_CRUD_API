const express = require('express');
const usersRouters = require('./routes/users.js')

const app = express();
const PORT  = 5000;


app.use(express.json());

app.use('/users', usersRouters);

app.get('/', (req,res) => {
    console.log("Get request to home page");
    res.send("Welcome to the Homepage");
});

app.listen(PORT , () => {
    console.log(`server running on: http://localhost:${PORT}`);
})