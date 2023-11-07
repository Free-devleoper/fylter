const os=require('os')

// info about current user
const user=os.userInfo()
// methord return system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    relelease:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS)