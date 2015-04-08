use training
db.scores.aggregate( {$match: {"kind":"quiz"}}, {$group: {_id:null, minScore: {$min: "$score"}, maxScore: {$max: "$score"} } } ).forEach(printjson)
