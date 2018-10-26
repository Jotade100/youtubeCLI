const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  //console.log(args)
  console.log("Está usando videitos por Juan Diego ;)")
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'data':
      require('./codigo/data')(args)
      break

    case 'download':
      require('./codigo/download')(args)
      break

    case 'help':
      require('./codigo/help')(args)
      break
    case 'stats':
      require('./codigo/stats')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}