const fs = require('fs')
function readdir(path){
 return   new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) => {
            if(err){
                reject(err)
            }else{
                resolve(paths)
            }
        })

    })
}
function stat(path){
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) => {
            if(err){
                reject(err)
            }else{
                resolve(stat)
            }
        })
    })
}
stat('./').then(stat => {
    console.log(stat.isFile())

})
//readdir('./').then((paths) => console.log(paths))
