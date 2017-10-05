import chalk from 'chalk'

export function info (text) {
  console.log(chalk.white.bgBlue(text))
}

export function success (text) {
  console.log(chalk.white.bgGreen(text))
}
