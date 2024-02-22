const fs = require('fs'); 
const readline = require('readline');
// const csv = require("csv-parse");  

function readData(file) {
    let salesFile = readline.createInterface({ 
        input: fs.createReadStream('sales_data.txt')
    }); 

    return salesFile;
}

function parseData(file) {
    let data = []
    let salesFileData = readData(file);
    
    salesFileData.on('line', (line) => {
        data.push(line.split(","));
    });
    
    salesFileData.on('close', () => {
        callback(data);
    });

    return data;
}

function dataAggregation(file) {
    let parseSalesFile = parseData(file);
    const aggregation = {};

    parseSalesFile.forEach(function (columns) {
        let productName = columns[0];
        let quantity = parseInt(columns[2], 10);
        let saleAmount = parseFloat(columns[4]);

        if (!aggregation[productName]) {
            aggregation[productName] = {
                totalQuantity: quantity,
                totalSalesAmount: saleAmount
            };
        } 
        else {
            aggregation[productName].totalQuantity += quantity;
            aggregation[productName].totalSalesAmount += saleAmount;
        }
    });

    console.log(aggregation);
}


const file = "sales_data.txt"
dataAggregation(file);
