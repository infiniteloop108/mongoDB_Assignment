use digg
db.stories.find( { "shorturl.view_count": { $gt: 1000 } } ).forEach(printjson)
