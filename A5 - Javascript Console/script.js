const fs = require('fs'); 
const split = require("split");
// const csv = require("csv-parse");  
let data = []

function readData(file) {
    let salesFile = fs.createReadStream(file, "utf-8");
    return salesFile;
}

function parseData(file) {
    let salesFileData = readData(file);

    salesFileData.pipe(split())
        .on('data', function (row) {
            let columns = row.split(',');
            data.push(columns);
        })
}

function dataAggregation(file) {
    parseData(file);
    let parseSalesFile = data;
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