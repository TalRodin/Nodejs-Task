require('../src/db/mongoose')
const Task = require('../src/models/task')



// Task.findByIdAndDelete("5f41fb631cfeba353ff22785").then((task)=>{
//     console.log(task)
//     return  Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskandCount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}

deleteTaskandCount("5f404876a6b7852caf280062").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
