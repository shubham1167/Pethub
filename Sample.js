// const a = "SHUBHA";
// console.log(a);
// let greet = (name)=> {
//     console.log(`Hi, ${name}`);
// }
// greet('55');

// let a = setInterval(()=>{
//     console.log("nd")
// },2000);

// setTimeout(()=>{
//     console.log("TIMEOUT");
//     clearInterval((a));
// },4000);

// console.log(__dirname);
// console.log(__filename);

// const {a,b} = require('./Sample2');
// console.log(a,b);

//READING FILES
const fs = require('fs');
// a.readFile('./pfa.txt' , (err , data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//WRITNG A FILE
// fs.writeFile('./write.doc','Zombie', () =>{
//     console.log("WRITTEN");
// })

//DIRECTORIES
// if(!fs.existsSync('./DIR')){
// fs.mkdir('./DIR', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("DIRECT");
// })}
// else{
// fs.rmdir('./DIR', ()=>{
//     console.log("RMDIR")
// });}

 //DELETE
//  fs.unlink('.write.txt',() =>{
//     console.log("DELETED");
//  });

//STREAMS
const reads = fs.createReadStream('./Blog.txt',{encoding:'utf-8'});
const writes = fs.createWriteStream('./Blog1.txt');

// reads.on('data', (chunk) => {
//    // console.log("*******CHUNK*********");
//    // console.log(chunk);
//    writes.write('*******GOT iT*********');
//    console.log("**************************")
//    writes.write(chunk);
// })

reads.pipe(writes);