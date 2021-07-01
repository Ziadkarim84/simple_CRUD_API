const express = require("express");

var id = 4;
const router = express.Router();

// all routes are starting with /users

var users = [
  {
      id: 1,
    firstName: "Ziad",
    lastName: "Karim",
    age: 24
  },
  {
    id: 2,
    firstName: "Anik",
    lastName: "Baidya",
    age: 26
  },
  {
    id: 3,
    firstName: "Rijvy",
    lastName: "Noman",
    age: 27
  }
];

router.get("/", (req, res) => {
  res.send(users);
  console.log(users);
});

router.post("/", (req, res) => {

    console.log('POST route reached!');
    const user = req.body;
    user.id = id++;
    users.push(user);
    res.send(users);
});

router.get("/:id", (req,res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser) ;
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    users = users.filter((user)=> user.id != id); //creates an array for all the values with passed condition
 
    res.send(users);
});

router.patch('/:id', (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const foundUser = users.find((user)=> user.id==id);
    if(firstName) foundUser.firstName = firstName;
    if(lastName) foundUser.lastName = lastName;
    if(age) foundUser.age = age;
    res.send(users);
});

module.exports = router;
