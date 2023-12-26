const fs = require('fs');
const uniqid = require('uniqid');

const addUser = function (name, email) {
    const users = loadUsers();
    // console.log(users);
    users.push({
        id: uniqid(),
        name: name,
        email: email
    })
    saveUsers(users);
}

const readUser = function (id) {
    const users = loadUsers();
    // console.log(users);
    const user = users.find((user) => user.id === id)

    if (user) {
        console.log(user)
    } else {
        console.log('user not found!')
    }
}

const updateUser = function (id, name, email, password) {
    const users = loadUsers();
    // console.log(users);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
        console.log(userIndex)
        users[userIndex] = {
            id,
            name,
            email,
            password
        }
        saveUsers(users);
    } else {
        console.log('user not found!')
    }
}

const deleteUser = function (id) {
    const users = loadUsers();
    const usersToKeep = users.filter((user) => user.id !== id)
    console.log(usersToKeep);
    saveUsers(usersToKeep);
}

const saveUsers = function (users) {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers = function () {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addUser: addUser,
    readUser: readUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}