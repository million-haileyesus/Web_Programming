/*
    Every file submitted in this course needs to be documented,
    points will be designated towards documentation, don't loss
    points for not documenting your work.  Provide general 
    documentation about you, the course and assignment
    
    Autor: Million Haileyesus
    School: Rowan University
    Course: Web Programming CS04305
    Assignment: A5 - Javascript Console
    Due Date: 02/21/2024
    Instructor: Professor Marquise Pullen

    Description:  Improve the layout and design of your existing 
    profile page using advanced CSS techniques (flex-box and media-queries) 
    to produce a responsive, clean, organized presentation that aligns 
    with the inspiration image provided.

    Honor Pledge: I pledge that this work is entirely my own

    Refernce: I had some help many websites with new promise(...)

*/


const fs = require('fs'); 
const readline = require('readline');
// const csv = require("csv-parse");  

function readData(file) {
    return new Promise((resolve, reject) => {
        let salesFile = readline.createInterface({
            input: fs.createReadStream(file)
        });

        resolve(salesFile);
    });
}

function parseData(file) {
    return new Promise((resolve, reject) => {
        let data = [];
        let salesFileData = readData(file);
        let lineNumber = 0;

        salesFileData.then((salesFile) => {
            salesFile.on('line', (line) => {
                lineNumber++;

                if (lineNumber > 1) {
                    data.push(line.split(","));
                }
            });

            salesFile.on('close', () => {
                resolve(data);
            });
        });
    });
}

function dataAggregation(file) {
    return parseData(file).then((parseSalesFile) => {
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
            } else {
                aggregation[productName].totalQuantity += quantity;
                aggregation[productName].totalSalesAmount += saleAmount;
            }
        });

        return aggregation;
    });
}


function summaryReport(file) {
    dataAggregation(file).then((aggregation) => {
        Object.keys(aggregation).forEach((productName) => {
            console.log(`${productName}: Quantity - ${aggregation[productName].totalQuantity}, 
                                        Amount - ${aggregation[productName].totalSalesAmount}`
            );
        });

        const maxSalesProduct = Object.keys(aggregation).reduce((a, b) => {
            return aggregation[a].totalQuantity > aggregation[b].totalQuantity ? a : b;
        });

        console.log(`Product with the highest sales volume: ${maxSalesProduct}`);
    });
}


const file = "sales_data.txt";
summaryReport(file);

