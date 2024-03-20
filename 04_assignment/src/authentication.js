const fs = require("fs");
const path = require("path");


async function authenticate(req, res) {
  const { headers } = req;
  const users = await getAllUsers();
  return new Promise((resolve, reject) => {
    console.log(headers);
    if (!headers.username || !headers.password){      
     reject("No headers found");
    }
    const userFound = users.find((user)=> user.username === headers.username);
    if (!userFound) {
      reject("User not foundd");
    }
    if(userFound.password !== headers.password){
        reject("Password is incorrect");
        return;
    }
    resolve();

  });
}

module.exports = { authenticate, getAllUsers };
