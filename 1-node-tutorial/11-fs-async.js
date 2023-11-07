const {readFile,writeFile, read}=require('fs')



// const first=readFileSync('./content/first.txt','utf8')
// const second=readFileSync('./content/second.txt','utf8')
readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=res;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second=result;
        writeFile('./content/results-async.txt',`Here is result : ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
    console.log(res)
})