var fs = require('fs');
const ora = require('ora')
var youtubedl = require('youtube-dl');

module.exports = async (args) => {
	const spinner = ora();
	spinner.start();
    const url = args.url || args.l;
	const name = args.name || 'videitoDescargado';
	const format = args.format || '.mp4';
	var video = youtubedl(url,
	// Optional arguments passed to youtube-dl.
	  ['--format=18'],
	  // Additional options can be given for calling `child_process.execFile()`.
	  { cwd: __dirname });
	 
	// Will be called when the download starts.
	video.on('info', function(info) {
	  console.log('La descarga ha iniciado...');
	  console.log('Archivo: ' + info._filename);
	  console.log('Tamaño: ' + info.size);
	});
	 
	video.pipe(fs.createWriteStream(name + format));
	spinner.stop();
	console.log('La descarga ha terminado');
}