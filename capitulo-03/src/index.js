const express = require("express");
const cors = require("cors");

const { v4: uuid } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post("/users", (request, response) => {
  const {
    body: { name, email },
  } = request;


  const user = {
    id: uuid(),
    name,
   email,

  };

  users.push(user);

  return response.status(201).json(user);
});

app.get("/users", (request, response) => {
 

  return response.status(200).json(users);
});

app.get("/user/:id", (request, response) => {
  const { id } = request.params;

  const user = users.find((user) => user.id === id);


  return response.status(200).json(user);
});


app.put(
  "/user/:id",
  (request, response) => {
  
  const { id } = request.params;
  const { name, email} = request.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return response.status(404).json({ error: "User not found" });
  }

  user.name = name;
  user.email = email;

  return response.json(user);
}
  
);



app.delete(
  "/user/:id",
 
  (request, response) => {

    users.splice(users.id, 1);

    return response.status(204).json(users);
  }
);

module.exports = app;
