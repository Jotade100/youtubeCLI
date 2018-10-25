const ora = require('ora')
var youtubedl = require('youtube-dl');

module.exports = async (args) => {
	const spinner = ora();
	spinner.start()
    const url = args.url || args.l
	youtubedl.getInfo(url, function(err, info) {
	  if (err) throw err;
	  
	  //console.log(info);
	  console.log('id:', info.id);
	  console.log('title:', info.title);
	  console.log('url:', url);
	  console.log('thumbnail:', info.thumbnail);
	  console.log('description:', info.description);
	  console.log('duration:', info.duration);
	  console.log('upload date:', info.upload_date);
	  console.log('categories:', info.categories);
	  console.log('tags:', info.tags);
	  spinner.stop();
	});
}