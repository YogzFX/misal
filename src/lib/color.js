const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const sesLog = (text, color) => {
	return !color ? chalk.greenBright('[ ELAINA ] ') + chalk.magentaBright(text) : chalk.greenBright('[ WHATSAPP BOT ] ') + chalk.keyword(color)(text)
}

const infolog = (text) => {
	return chalk.greenBright('[ ELAINA ] ') + chalk.magentaBright(text)
}

module.exports = {
	color,
	bgcolor,
    sesLog,
    infolog
}
