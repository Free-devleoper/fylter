//Writeable
//Readable
//Dupelex
//Transform

// const {writeFileSync}=require('fs')
// for(let i =0;i<100000;i++){
//     writeFileSync('./content/big.txt',`hello world ${i} \n`,{flag:'a'})
// }
// const {createReadStream}=require('fs')
// // default 64kb
// //last buffer -remainder
// const stream=createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});

// stream.on('data',(results)=>{
// console.log(results)
// })

var http=require('http')
var fs=require('fs')
http
    .createServer(function(req,res){
        // const text=fs.readFileSync('./content/big.txt','utf8')
        // res.end(text)
        const filestreeam=fs.createReadStream('./content/big.txt','utf8')
        filestreeam.on('open',()=>{
            filestreeam.pipe(res)
        })
        filestreeam.on('error',(err)=>{
            res.end(err)
        })
    }).listen(5000)