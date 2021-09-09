const chalk = require(`chalk`);
const { MessageSelectMenu, MessageActionRow } = require(`discord.js`);


const create_mh = (
    array
) => {

    if (!array) throw new Error(chalk.red.bold(`Please provide an option!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`You must select something!`));
    let select_menu;

    let id = `help-menus`

    let menus = []

    const emo = {
        fun: "🎮",
        info: "🎫",
        tools: "⚙️",
        moderation: "🧰",
        devonly: "🕶️",
    }


    array.forEach(cca => {
        let name = cca;
        let sName = `${name.toUpperCase()}` 
        let tName = name.toLowerCase()
        let fName = name.toUpperCase()
        
        return menus.push({
            label: sName,
            description: `${tName} commands!`,
            value: fName
        })
    })

    let ccct = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`Choose the command category`)
        .addOptions(menus)

    select_menu = new MessageActionRow()
        .addComponents(
            ccct
        )


    return {
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh
