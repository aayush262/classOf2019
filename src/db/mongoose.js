const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://ayoush:ayoush26@cluster0-ps1qq.mongodb.net/class-of-2019?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('db connected')
})




