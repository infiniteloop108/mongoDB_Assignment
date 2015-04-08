use digg
db.stories.find( { $and: [ {"topic.name": "Comedy"}, { $or:  [{"media": "news"}, {"media":"images"}] } ] } ).forEach(printjson)
