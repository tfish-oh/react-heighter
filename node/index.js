const shell=require('shelljs')
const path = require('path')
const argv = require("yargs").argv;
const fs = require('fs')
// console.log(argv,path.join(__dirname,'/dist/') )
const commit =argv._[0]
const path_str = path.join(__dirname,'..','/dist/index.html')
console.log(path_str)
fs.readFile(path_str, function (err,data){
    if(err){
        return
    }
    const str=data.toString()
    console.log(data.toString())
    writeFile(path_str,str)
})
function writeFile(path,str){
    let s = str.replace(/<\/html>/i,'<p>'+new Date()+"</p></html>")
    console.log(s)
    fs.writeFile(path,s,function (err,data){
        if(err){
            return
        }
        console.log(data)
    })
}