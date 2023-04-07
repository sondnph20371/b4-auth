// npm install mongoose --save
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sondnph20371:9WAkCEiwRsTJ4x9o@cluster0.yclblt9.mongodb.net/son?retryWrites=true&w=majority')
        .catch((err)=>{
            console.log(err);
        });
module.exports = {mongoose};