const fs = require('fs'); 
const csv = require("csv-parse");  

function readData(file) {
    let salesFile = fs.createReadStream(file);
    return salesFile;
}

function parseData(file) {
    let salesFileData = readData(file);
    let rows = salesFileData.split('\n'); 
    let data = [];
    
    rows.forEach(function (row) {
        let columns = row.split(',');
        data.push(columns);
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