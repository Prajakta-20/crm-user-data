import express from "express";
import dotenv from "dotenv";
import cookieParder from "cookie-parser";
import cors from "cors";
import "./db.js";
import { AdminRouter } from "./router/auth.js";
import { userRouter } from "./router/user.js";
import { AddUser } from "./models/AddUser.js";
import { Tickets } from "./models/Tickets.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParder());
dotenv.config();
app.use("/auth", AdminRouter);
app.use("/user", userRouter);

// mongoose.connect("mongodb://127.0.0.1:27017/user");

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   UserModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       if (user.password === password) {
//         res.json("Success");
//       } else {
//         res.json("the password is incorrect");
//       }
//     } else {
//       res.json("No record found");
//     }
//   });
// });

// app.post("/register", (req, res) => {
//   UserModel.create(req.body)
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// });
// const db = db("mydatabase");
// console.log(db.collection);

// const userinfos = mongoose.model("userinfos", AddUser);
app.get("/", (req, res) => {
  // const id = req.params.id;
  Tickets.find({})
    .then((tickets) => res.json(tickets))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  AddUser.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  AddUser.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  AddUser.findByIdAndUpdate(
    { _id: id },
    {
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  AddUser.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

// Ticket submission
app.post("/submitTicket", (req, res) => {
  Tickets.create(req.body)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.json(err));
});

app.get("/viewUser/:id", (req, res) => {
  const id = req.params.id;
  Tickets.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
