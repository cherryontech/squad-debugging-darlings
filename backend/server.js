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
    function isEmail(email) {
        let emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
    let isValidEmail = isEmail(email);
    let upperCaseRegex = /[A-Z]/;
    let numberRegex = /[0-9]/;
    let specialCharRegex = /[^a-zA-Z0-9]/;
    // validate the data here the email should be an actual email, password should be crypted
    if (isValidEmail && password === password_confirm) {
        //Check if password length > 8
        if(password.length >= 8 && password.match(upperCaseRegex) && password.match(numberRegex) && !password.match(specialCharRegex)) {
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
        } else if(password.length < 8 ) {
            res.status(400).json({
                message: "Password should be 8 characters or more"
            });
        } else if(!password.match(upperCaseRegex)){
            res.status(400).json({
                message: "Password should have at least one upper"
            });
        } else if(!password.match(numberRegex)){
            res.status(400).json({
                message: "Password should have at least one number"
            });
        } else if(password.match(specialCharRegex)){
            res.status(400).json({
                message: "Password should not have any symbol"
            });
        }


    }else if(!isValidEmail){
        res.status(400).json({
            message: "Wrong email format"
        });
    }
    else { //password doesn't match
        res.status(400).json({
            message: "Password doesn't match"
        });
    }
})


app.listen(port, () => {
  console.log("welcome to Mentor-Mentee matching platform");
});
