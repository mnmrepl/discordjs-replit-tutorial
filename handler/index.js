const { glob } = require('glob')
const { promisify } = require('util'); 
const { aliases } = require('../index');

const globPromise = promisify(glob);

module.exports = async (client) => {

    const commandfiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandfiles.map((value) => {
        const file = require(value);
        const splitted = value.split('/');
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file }
            client.commands.set(file.name, properties)
        }
        if (file.aliases && Array.isArray(file.aliases)) { file.aliases.forEach(alias => client.aliases.set(alias, file.name)) }
    })


    const eventfiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventfiles.map((value) => require(value))
}
