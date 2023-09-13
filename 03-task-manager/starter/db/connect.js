const mongoose = require('mongoose')

//const connectionString = 'mongodb+srv://yiannispsaros:tgFPCFtsJ6trX8og@nodeexpressproject.zlrjwvh.mongodb.net/03-task-manager?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB