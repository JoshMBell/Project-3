const commodity = "http://127.0.0.1:5000/commodity_prices";
const expendature = "http://127.0.0.1:5000/expendature";

d3.json(commodity).then(function(commodityData){
    console.log(commodityData);
}).catch(function(error) {
    console.log(error);
});