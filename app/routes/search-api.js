/**
 * search-api
 *
 * Creates an API for searching through posts
 */

var posts = require('../models/post').allPosts;
var fs = require('fs');
var Emitter = require('events').EventEmitter
var eventEmitter = new Emitter();
var cheerio = require('cheerio');

/**
 * findPosts
 *
 * Searches through all posts, seeking the keyword in title and content.
 * Returns a JSON object with relevant posts
 * @param  keyword
 * @return relevant posts
 */
function findPosts(keyword) {
	keyword = keyword.toLowerCase();
	var relevantPosts = [],
		i = 0,
		postsLength = posts.length;


	testPost(posts, posts[0]);

	function testPost(posts, post) {
		var postContent = '',
			slug = post.slug,
			title = post.title,
			bodyIndex;
		// Get the post content
		var file = fs.createReadStream(__dirname + '/../views/posts/' + slug + '.ejs');

		file.on('data', function (data) {
			postContent += data;	
		});
		file.on('end', function () {
			cheerioLoad = cheerio.load(postContent);
			postContent = cheerioLoad('.page-content').text().replace(/\s{2,}/g , '');
			// searchPostContent
			if (title.toLowerCase().indexOf(keyword) !== -1) {
				relevantPosts.push({
					'slug': slug ,
					'title': title,
					'desc': postContent.slice(0, 200)
				});
			} else if ((bodyIndex = postContent.toLowerCase().indexOf(keyword)) !== -1) {
				var sample = '...' + postContent.slice(bodyIndex - 100, bodyIndex + 100) + '...';
				relevantPosts.push({
					'slug': slug,
					'title': title,
					'desc': sample
				})
			}

			if (++i === postsLength) {
				eventEmitter.emit('searchComplete', relevantPosts);
				//return relevantPosts;
			} else {
				testPost(posts,posts[i]);
			}
		});
	}
}

exports.find = findPosts;