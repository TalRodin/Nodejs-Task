const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})

// const myTask = new Task({
//     description:'Task4',
//     completed: true
// })

// myTask.save().then((myTask)=>{
//     console.log(myTask)
// }).catch((error)=>{
//     console.log('Error',error)
// })

// const me = new User({
//     name:'   Tal   ',
//     email: 'alyona@gmail.com ',
//     age: 24,
//     password: '12345678'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//    console.log('Error', error)
// })