use training
db.scores.find( {score: {$lt : 65}} ).forEach(printjson)
