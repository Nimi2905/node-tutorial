/* const fs=require('fs');
fs.readFileSync 
    Or
*/

const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

//override
/* writeFileSync('./content/resultFile.txt',`Result is :  ${first} , ${second}` */


//append
writeFileSync('./content/resultFile.txt',`Result is :  ${first} , ${second}`,{flag:'a'}) 