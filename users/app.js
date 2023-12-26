const yargs = require('yargs')
const users = require('./users.js')

yargs.version('1.1.0')

yargs.command({
    command: 'create',
    describe: 'create a new user',
    builder: {
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'user email',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        users.addUser(argv.name, argv.email);
    }
})

yargs.command({
    command: 'read',
    describe: 'raed a user use id to find the user',
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        users.readUser(argv.id);
    }
})

yargs.command({
    command: 'update',
    describe: 'update user data id to find the user',
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        },
        name:{
            describe: 'user new name',
            demandOption: true,
            type: 'string'

        },
        email:{
            describe: 'user new email',
            demandOption: true,
            type: 'string'
        },
        password:{
            describe: 'user new password',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        users.updateUser(argv.id,argv.name, argv.email,argv.password);
    }
})

yargs.command({
    command: 'delete',
    describe: 'delete a user use id to find the user',
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        users.deleteUser(argv.id);
    }
})




yargs.parse()
