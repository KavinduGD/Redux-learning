const expres = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./model/Student");
const cors = require("cors");
dotenv.config();

const app = expres();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let todos = [
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Do laundry", done: true },
];

app.get("/api/todos", (req, res) => {
  res.send(todos).status(200);
});

app.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.send(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.post("/api/todos", (req, res) => {
  const { text, done } = req.body;
  const id = todos.length + 1;
  const todo = { id, text, done };
  todos.push(todo);
  res.send(todos).status(201);
});

app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const todo = todos.find((todo) => todo.id === id);
  console.log(todo);
  res.send(todo);
});

app.get("/api/todos", (req, res) => {
  res.send(todos).status(200);
});

//students

//get all
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(404);
  }
});

//getById
app.get("/api/students/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    if (student) {
      res.send(student).status(200);
    } else {
      res.send("NO student").status(400);
    }
  } catch (err) {
    console.log(err);
    res.send("not found").status(404);
  }
});

//create a student
app.post("/api/students", async (req, res) => {
  const { studentId, name, course } = req.body;
  try {
    const student = await Student.create({ studentId, name, course });
    res.send(student).status(200);
  } catch (err) {
    res.send("error occur").status(400);
  }
});

//update a student
app.put("/api/students/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { studentId, name, course } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, {
      studentId,
      name,
      course,
    });
    res.send(student).status(202);
  } catch (err) {
    console.log("updated fucked");
  }
});
// Delete a student
app.delete("/api/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  res.status(204).json({ message: "Student deleted" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log(`DB base connected`);
    //listen for req
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`listen in port ${process.env.PORT}`);
});
