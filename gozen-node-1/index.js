const fs = require("fs");
const fileName = 'file2.text';
const content = 'This is the content to be written';

fs.writeFile(fileName, content, (err) => {
    if (err) {
        throw err;
    }
});

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});
const newData = 'hello';
const modifiedContent = newData + '\nappend File.';

fs.appendFile(fileName, modifiedContent, 'utf-8', (err) => {
    if (err) {
        // throw err;
        console.log("error")
    } else {
        console.log(`File is updated at ${fileName}.`);
    }
});