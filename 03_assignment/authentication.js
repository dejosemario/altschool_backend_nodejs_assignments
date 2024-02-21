const fs = require("fs");
const path = require("path");

const userDbPath = path.join(__dirname, "db", "users.json");

function getAllUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile(userDbPath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
      return;
    });
  });
}

async function authenticate(req, res) {
  const { headers } = req;
  const users = await getAllUsers();
  return new Promise((resolve, reject) => {
    if (!headers) {
      reject("No headers found");
    }
    const userFound = users.find((user)=> user.username === headers.username);
    if (!userFound) {
      reject("User not found");
    }
    if(userFound.password !== headers.password){
        reject("Password is incorrect");
        return;
    }
    resolve();

  });
}

module.exports = { authenticate, getAllUsers };
