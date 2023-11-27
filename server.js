const express = require("express");
const app = express();

// import pets data
const pets = require(`./pet-database.js`);

app.get("/", (req, res) => {
  res.send("Pet Finder");
});

app.get("/api/v1/pets", (req, res) => {
  //return the json data of the pets array
  res.json(pets);
});

app.get("/api/v1/pets/:name", (req, res) => {
  //grab name param
  const petNameParam = req.params.name;
  //use .find to go through pets array and if a pet's name equals the petNameParam, return the name, if not, return a message
  const nameOfPet = pets.find((singlePet) => singlePet.name === petNameParam);
  if (nameOfPet) {
    res.send(nameOfPet);
  } else {
    res.send(`No pet found with the name: ${petNameParam}`);
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
