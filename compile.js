const path=require('path');
const fs=require('fs');
const solc=require('solc');


const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');

const source=fs.readFileSync(inboxPath,'utf8');

//specifie source code and number of contracts we intent to compile ..here we need 1
// solc.compile(source,1);

//log to see output

console.log(solc.compile(source,1););
