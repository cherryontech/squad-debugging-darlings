const {
  v4: uuidv4,
} = require('uuid');
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs")
const port = 3000;
app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())

userDB = "../database/user.json";

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//try catch
app.post("/auth/signup", async (req, res) => {
  const { email, password, password_confirm } = req.body;
  // validate the data here the email should be an actual email, password should be crypted
  if (password === password_confirm) {
    try {
      const cryptedPassword = await bcrypt.hash(password, 10); // use await to get the hashed password
      const userId = uuidv4();
      const user = {
        userId: userId,
        userEmail: email,
        userPassword: cryptedPassword
      };
      console.log({user})
      //save it in the json file
      res.status(201).json({
        message: "User created successfully!",
        user: user
      });

    }
    catch (error) {
      console.log(`error occurred ${error}`)
    }
  } else { //password doesn't match

  }
})


app.listen(port, () => {
  console.log("welcome to Mentor-Mentee matching platform");
});
