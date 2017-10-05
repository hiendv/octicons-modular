import chalk from 'chalk'

export default {
  info (text) {
    console.log(chalk.white.bgBlue(text))
  },
  success (text) {
    console.log(chalk.white.bgGreen(text))
  }
}
