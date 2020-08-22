const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type: String,
        required:true,
        trim:true, 
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }

})

const Task =mongoose.model('Task',{
    description:{
        type: String,
        trim: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const myTask = new Task({
    description:'Task4',
    completed: true
})

myTask.save().then((myTask)=>{
    console.log(myTask)
}).catch((error)=>{
    console.log('Error',error)
})

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