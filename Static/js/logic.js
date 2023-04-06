const financial = "http://127.0.0.1:5000/financial_data"

d3.json(financial).then(function(financialData){

    // save financial data for WA by commodity and date
    let WA_Au_exp = [];
    let WA_Fe_exp = [];
    let WA_Cu_exp = [];
    //let WA_all_exp = [];

    for (let i = 0; i < financialData.length; i++){
        let dateString = financialData[i].date;
        let WA_Au = financialData[i].wa_gold;
        let WA_Fe = financialData[i].wa_iron_ore;
        let WA_Cu = financialData[i].wa_copper;
        let Au_price = financialData[i].au_usd_oz
        let Fe_price = financialData[i].fe_usd_tonne
        let Cu_price = financialData[i].cu_usd_pound

        // Convert datestring to new format
        let dateConvert = new Date(dateString);
        let day = dateConvert.getDate();
        let month = dateConvert.getMonth() + 1;
        let year = dateConvert.getFullYear();
        let paddedDay = day.toString().padStart(2, '0');
        let paddedMonth = month.toString().padStart(2, '0');
        let date = `${paddedDay}/${paddedMonth}/${year}`;

        // Push results to variables
        WA_Au_exp.push({date: date, value: WA_Au, commodity: Au_price});
        WA_Fe_exp.push({date: date, value: WA_Fe, commodity: Fe_price});
        WA_Cu_exp.push({date: date, value: WA_Cu, commodity: Cu_price} );
        //WA_all_exp

    };

    // save commodity prices as individual variables with dates

    // create charts


    // button interactivity
    const buttons = document.querySelectorAll('.buttons button');

    // add event listeners to the buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // remove the 'active' class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // add the 'active' class to the clicked button
            button.classList.add('active');
    
            // determine which button was clicked
            const commodityName = this.textContent;
    
            // determine which expenditure array to use
            let expenditureArray;
            switch (commodityName) {
                case 'Fe':
                    expenditureArray = WA_Fe_exp;
                break;
                case 'Au':
                    expenditureArray = WA_Au_exp;
                break;
                case 'Cu':
                    expenditureArray = WA_Cu_exp;
                break;
            }
    
        // run the code to create the chart using the selected expenditure array
        createChart(expenditureArray);
        });
    });
    
    // function to create the chart
    function createChart(expenditureArray) {
        const chartDiv = document.querySelector('.chart3');
        // remove any existing canvas elements from the chartDiv
        chartDiv.querySelectorAll('canvas').forEach(canvas => {
            const chart = Chart.instances[canvas.id];
            if (chart) {
                chart.destroy();
            }
            canvas.remove();
        });
        
        // create an array of dates, values, and commodity prices from the expenditure array
        const dates = expenditureArray.map(obj => obj.date);
        const values = expenditureArray.map(obj => obj.value);
        let commodities = expenditureArray.map(obj => obj.commodity);
        commodities = commodities.map(Number);
     
        // create new canvas elements for the chart
        const valueCanvas = document.createElement('canvas');
        valueCanvas.width = 800;
        valueCanvas.height = 400;
        chartDiv.appendChild(valueCanvas);
        
        // create the left y-axis for values
        const valueCtx = valueCanvas.getContext('2d');
        const data = {
            labels: dates,
            datasets: [{
                label: 'Expendature (AUD mil)',
                data: values,
                yAxisID: 'value_y',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointRadius: 0,
            },{
                label: 'Commodity',
                data: commodities,
                yAxisID: 'commodity_y',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                pointRadius: 0,
            }]
        };

        const config = {
            type: 'line',
            data,
            options: {
                scales: {
                    value_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'left'
                    },
                    commodity_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'right' 
                    }
                }
            }
        }
        const chart = new Chart(valueCtx, config);
    } 


    
});