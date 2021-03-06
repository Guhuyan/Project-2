// Dependencies
const express = require("express");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const db = require("./models");
const router = require("./router");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Setting up a dynamic port
const PORT = process.env.PORT || 8080;

var dbUrl = "mongodb+srv://jjmateer:manila22@cluster0-q0kab.mongodb.net/chatroomDB?retryWrites=true&w=majority";


// http.listen(80);

io.on("connection", (io) => {
  console.log("Connected to socket.")
});

io.on("disconnect", () => {
  console.log("Disconnected");
});
mongoose.connect(dbUrl, err => {
  console.log("Connected to mongoose");
  if (err) {
    console.log(err)
  }
});

// Express Session
app.use(
  session({
    secret: "Keyboard Cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
  })
);

var Message = mongoose.model("Message", {
  name: String,
  message: String
});

app.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

app.get("/messages/:user", (req, res) => {
  var user = req.params.user;
  Message.find({ name: user }, (err, messages) => {
    res.send(messages);
  });
});

app.post("/messages", async (req, res) => {
  try {
    var message = new Message(req.body);

    var savedMessage = await message.save();
    console.log("saved");
    io.emit("message", req.body);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    return console.log("error", error);
  } finally {
    console.log("Message Posted");
  }
});

//connect with io
//connect mongoose
// socket.on('message', addMessages)

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Router
app.use("/", router);

db.sequelize.sync({ force: false }).then(function () {
  http.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`)
  })
});
