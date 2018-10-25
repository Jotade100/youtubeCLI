const menus = {
  main: `
    videitos [comando] <opciones>

    data ............... resumen de los datos de un vídeo
    stats .............. estadísticas de un vídeo
    help ............... menú de ayuda
    download ........... descarga el vídeo propuesto`,

  data: `
    videitos data <opciones>

    --url, <https://...> ..... la url del vídeo`,
  stats: `
    videitos stats <opciones>

    --url, <https://...> ..... la url del vídeo`,
  download: `
    videitos download <opciones>

    --url, <https://...> ..... la url del vídeo
	--name, <nombreDelArchivo> ..... nombre del vídeo
	--format, <.format> ..... formato del vídeo (.mp4)`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}