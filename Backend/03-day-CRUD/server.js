const express = require("express");

const app = express();
let PORT = 3000;
let users = [];

app.use(express.json());

// get - READ
app.get("/", (req, res) => {
  res.send(users);
});

// post - CREATE
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("User saved successfully");
});

// delete - DELETE
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let newData = users.filter((val) => val.id !== id);
  users = newData;

  res.send("User deleted seccessfully");
});

// put - UPDATE
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let body = req.body;

  let updatesUser = users.map((val) =>
    val.id === id ? { id, name: body.name, age: body.age } : val,
  );

  users = updatesUser;

  res.send("User updated successfully");
});

app.listen(PORT, () => {
  console.log("Server is running on port - 3000");
});
