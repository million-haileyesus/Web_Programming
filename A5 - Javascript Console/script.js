function readData() {
    const fs = require('fs'); 
    const readline = require('readline'); 
    

    const file = readline.createInterface({ 
        input: fs.createReadStream('sales_data.txt')
    }); 

    file.on('line', (line) => {
        console.log(line.split(","));
    });

    return file;
}

file = readData();


