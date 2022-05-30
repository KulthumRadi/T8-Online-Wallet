// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/students-api", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log("Connection Successfully");
// }).catch((e) => {
//     console.log("No Connection");
// })

mongoose.connect("mongodb://localhost/walletBalance")
mongoose.connection.once('open', function(){
console.log("Connection Successfully");
}).on('error', function(error){
    console.log("No Connection", error);
})
