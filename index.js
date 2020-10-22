const { CRUD } = require('./helpers')
const db = require('./models')

const params = process.argv
if (params.length <= 2) {
    process.exit(0)
}

const args = params.slice(2)
const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1]

switch (command) {
    case CRUD.CREATE:
        const data = {}
        args.slice(1).map(args => {
            const tmp = args.split("=");
            data[tmp[0].substring(2)] = tmp[1]
        })
        db[entity]
            .create(data)
            .then(() => {
                console.log("Contact Created!");
            })
            .catch(console.log)
        break;
    case CRUD.READ:
        db[entity]
            .findAll()
            .then(console.log)
            .catch(console.log)
        break;
    case CRUD.UPDATE:
        console.log("Updated!!");
        break;
    case CRUD.DELETE:
        const obj = {}
        const command = args[1].split("=");
        const idToDelete = command[1]
        obj[command[0].substring(2)] = command[1]
        db[entity]
            .destroy({ where: obj })
            .then((code) => {
                if (code === 1) {
                    console.log("The row was deleted succesfully");
                }
            })
            .catch(console.log)
        break;

    default:
        console.log("Command Not Found");
        break;
}