const express = require("express");
const connectDB = require("./config/db");
const User = require("./modes/User");

require("dotenv").config();
const app = express();
connectDB();
const port = 5000;
////////////////////////////////create user
// User.create(
//   [
//     { name: "hajer", age: 20 },
//     { name: "ahmed", age: 22 },
//     { name: "amal", age: 24 },
//   ],

//   (err, data) => (err ? console.log(err) : console.log(data))
// );

///////////////////////////////////////////////delete user
// const deleteUser = async () => {
//   const user = await User.findById("638b1c0f5006f2d419291e0c");
//   if (user) user.remove();
// };

// deleteUser();

const updateUser = async () => {
  const user = await User.findById("638b1c0f5006f2d419291e0a");
  if (user) {
    user.name = "updatedname";
    await user.save();
  }
};

updateUser();

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`this server is running on port ${port}`)
);
