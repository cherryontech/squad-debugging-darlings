// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.listen(port, () => {
//   console.log("welcome to Mentor-Mentee matching platform");
// });

const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const port = 3000;
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());

userDB = "../database/user.json";

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// POST endpoint to be able to signup the users
app.post("/auth/signup", (req, res) => {
  const { email, password, password_confirm } = req.body;
  // validate the data here the email should be an actual email, password should be crypted
  if (password === password_confirm) {
    cryptedPassword = bcrypt.hash(password);
  }

  try {
    const userId = uuidv4();
    user = {
      userId: userId,
      userEmail: email,
      userPassword: cryptedPassword,
    };
    console.log({ user });
    //save it in the json file
  } catch (error) {
    console.log(`error occured ${error}`);
  }
});

app.listen(port, () => {
  console.log("welcome to Mentor-Mentee matching platform");
});
