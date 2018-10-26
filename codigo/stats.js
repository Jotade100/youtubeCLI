const ora = require('ora')
var youtubedl = require('youtube-dl');

module.exports = async (args) => {
	const spinner = ora();
	spinner.start()
    const url = args.url || args.l
	youtubedl.getInfo(url, function(err, info) {
	  if (err) {
		  console.error(err);
		  process.exit(1);};
	  spinner.stop();
	  console.log('title:', info.title);
	  console.log('duration:', info.duration);
	  console.log('categories:', info.categories);
	  console.log('tags:', info.tags);
	  console.log('likes:', info.like_count);
	  console.log('dislikes:', info.dislike_count);
	  console.log('rating:', info.average_rating);
	  console.log('views:', info.view_count);
	});
}