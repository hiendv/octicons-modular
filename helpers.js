const chalk = require('chalk')

const info = text => {
  console.log(chalk.white.bgBlue(text))
}

exports.info = info
