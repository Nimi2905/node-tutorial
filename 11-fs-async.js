/* const fs=require('fs');
fs.readFileSync 
    Or
*/

const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        second=result;
        writeFile('./content/file-async.txt',`Here is the result: ${first}, ${second}`,(err)=>{
            if(err){
                console.log(err);
                return;
            }
        })
    });
})