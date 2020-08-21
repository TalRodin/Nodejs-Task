// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} =require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL, { useUnifiedTopology: true },(error,client)=>{
        if (error){
            return console.log('Unable to connect to database')
        }
        const db = client.db(databaseName)
        //--------delete----------------
        // db.collection('users').deleteMany({
        //     age:24
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })
        // db.collection('tasks').deleteOne({
        //     description:'Task1'
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })

        //----------update--------------------
        // db.collection('users').updateOne({
        //     _id:new ObjectID("5f3c36fc7947ec8fa989ce22")
        // },{
        //     $inc:{
        //         age: 1
        //     }
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })

        // db.collection('tasks').updateMany({
        //     completed: false
        // },{
        //     $set:{
        //         completed: true
        //     }
        // }).then((result)=>{
        //     console.log(result.modifiedCount)
        // }).catch((error)=>{
        //     console.log(error)
        // })





        //--------------------find------------------------
        // db.collection('users').findOne({_id:new ObjectID("5f3b06def08a872851b6010f")},(error,user)=>{
        //     if(error){
        //         return console.log('Unable to fetch')
        //     }
        //     console.log(user)
        // })
    //     db.collection('users').find({age: 27}).toArray((error,users)=> {
    //         if(error){
    //             return console.log('Unable to fetch')
    //         }
    //         console.log(users)
    // })
        // db.collection('tasks').findOne({_id:ObjectID('5f3c3b63d342bf921c8888ec')},(error, task)=>{
        //     if (error){
        //         console.log('Error')
        //     }
        //     console.log(task)
        // })

        // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
        //     if (error){
        //         console.log('Error')
        //     }
        //     console.log(tasks)
        // })





    //     db.collection('users').insertOne({
    //         _id: id,
    //         name:'Tal',
    //         age: 24
    //     },(error, result)=>{
    //         if (error){
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    //     }
    // )
    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:28
    //     },
    //     {
    //         name:'Gunther',
    //         age:27
    //     }
    // ], (error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //         {description:'Task1',
    //         completed: true
    //         },{description:'Task2',
    //         completed: false
    //         },
    //         {description:'Task3',
    //         completed: true
    //         }], (error, result)=>{
    //             if(error){
    //                 return console.log('Unable to insert task')
    //             }
    //             console.log(result.ops)
    //         })

})
