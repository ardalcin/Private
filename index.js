const ZKLib = require('node-zklib')
const test = async () => {
let zkInstance = new ZKLib('192.168.1.158', 1100, 1100, 5000);
try {
    // Create socket to machine
    await zkInstance.createSocket()


    // Get general info like logCapacity, user counts, logs count
    // It's really useful to check the status of device

    console.log(await zkInstance.getInfo())
  } catch (e) {
    console.log(e)
    if (e.code === 'EADDRINUSE') {
    }
}

zkInstance.getRealTimeLogs((data)=>{
  // do something when some checkin 
  console.log(data)
})

}


// Create new user: setUser(uid, userid, name, password, role = 0, cardno = 0)


test();

