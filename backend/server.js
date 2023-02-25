const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const fs = require("fs");
const port = 3000;
const regexEnum = require("./regexEnum");
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());

userDB = "../database/user.json";

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//try catch
app.post("/auth/signup", async (req, res) => {
  const { email, password, password_confirm } = req.body;
  function isEmail(email) {
    return regexEnum.EMAIL.test(email);
  }
  let isValidEmail = isEmail(email);
  // validate the data here the email should be an actual email, password should be crypted
  if (isValidEmail && password === password_confirm) {
    if (
      password.length >= 8 &&
      password.match(regexEnum.UPPER_CASE) &&
      password.match(regexEnum.NUMBER) &&
      !password.match(regexEnum.SPECIAL_CHAR)
    ) {
      try {
        const cryptedPassword = await bcrypt.hash(password, 10); // use await to get the hashed password
        const userId = uuidv4();
        const user = {
          userId: userId,
          userEmail: email,
          userPassword: cryptedPassword,
        };
        console.log({ user });
        //save it in the json file
        res.status(201).json({
          message: "User created successfully!",
          user: user,
        });

        fs.appendFile("./database/user.json",  JSON.stringify(user, null, 2) , (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Response saved to user.json");
        });
      } catch (error) {
        console.log(`error occurred ${error}`);
      }
    } else if (password.length < 8) {
      res.status(400).json({
        message: "Password should be 8 characters or more",
      });
    } else if (!password.match(regexEnum.UPPER_CASE)) {
      res.status(400).json({
        message: "Password should have at least one upper",
      });
    } else if (!password.match(regexEnum.NUMBER)) {
      res.status(400).json({
        message: "Password should have at least one number",
      });
    } else if (password.match(regexEnum.SPECIAL_CHAR)) {
      res.status(400).json({
        message: "Password should not have any symbol",
      });
    }
  } else if (!isValidEmail) {
    res.status(400).json({
      message: "Wrong email format",
    });
  } else {
    res.status(400).json({
      message: "Password doesn't match",
    });
  }
});

app.listen(port, () => {
  console.log("welcome to Mentor-Mentee matching platform");
});
