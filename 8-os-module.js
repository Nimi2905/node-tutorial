const os=require("os");

//user info

const user=os.userInfo();
console.log(user)

//System uptime 

console.log(`System uptime ${os.uptime()} in seconds`)

//current os

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOs)