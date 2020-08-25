require('../src/db/mongoose')
const User = require('../src/models/user')

//5f4048668c53db2c9fd58952

// User.findByIdAndUpdate("5f41f0f59b6ad2313f8ac860", {age: 1}).then((user)=>{
//     console.log(user)
//     return  User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("5f41f0f59b6ad2313f8ac860", 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})