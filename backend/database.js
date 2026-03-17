const mongoose = require("mongoose");

mongoose.connect("mongodb://Naveen:NcB%40%2326DB@ac-1mlkptr-shard-00-00.bbqajyu.mongodb.net:27017,ac-1mlkptr-shard-00-01.bbqajyu.mongodb.net:27017,ac-1mlkptr-shard-00-02.bbqajyu.mongodb.net:27017/?ssl=true&replicaSet=atlas-md710q-shard-0&authSource=admin&appName=Cluster-1")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

module.exports = mongoose;