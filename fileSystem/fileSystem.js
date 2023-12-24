const fs=require('fs');
fs.writeFileSync('newFile.txt','Create a new txt file');
fs.copyFileSync('newFile.txt','copyOfnewFile.txt');
fs.renameSync('copyOfnewFile.txt','renamedCopy.txt');
const allfiles=fs.readdirSync('./');
console.log(allfiles);
fs.appendFileSync('renamedCopy.txt','\nappended by appendFileSync')