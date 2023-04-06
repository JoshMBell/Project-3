const financial = "http://127.0.0.1:5000/financial_data"

d3.json(financial).then(function(financialData){

    // save financial data for WA by commodity and date
    let SA_Au_exp = [];
    let SA_Fe_exp = [];
    let SA_Cu_exp = [];
    let WA_Au_exp = [];
    let WA_Fe_exp = [];
    let WA_Cu_exp = [];
    let VIC_Au_exp = [];
    let VIC_Fe_exp = [];
    let VIC_Cu_exp = [];
    let NT_Au_exp = [];
    let NT_Fe_exp = [];
    let NT_Cu_exp = [];
    let QLD_Au_exp = [];
    let QLD_Fe_exp = [];
    let QLD_Cu_exp = [];
    let NSW_Au_exp = [];
    let NSW_Fe_exp = [];
    let NSW_Cu_exp = [];

    //let WA_all_exp = [];

    
    for (let i = 0; i < financialData.length; i++){
        let dateString = financialData[i].date;
        let SA_Au = financialData[i].sa_gold;
        let SA_Fe = financialData[i].sa_iron_ore;
        let SA_Cu = financialData[i].sa_copper;
        let WA_Au = financialData[i].wa_gold;
        let WA_Fe = financialData[i].wa_iron_ore;
        let WA_Cu = financialData[i].wa_copper;
        let VIC_Au = financialData[i].vic_gold;
        let VIC_Fe = financialData[i].vic_iron_ore;
        let VIC_Cu = financialData[i].vic_copper;
        let NT_Au = financialData[i].nt_gold;
        let NT_Fe = financialData[i].nt_iron_ore;
        let NT_Cu = financialData[i].nt_copper;
        let QLD_Au = financialData[i].qld_gold;
        let QLD_Fe = financialData[i].qld_iron_ore;
        let QLD_Cu = financialData[i].qld_copper;
        let NSW_Au = financialData[i].nsw_gold;
        let NSW_Fe = financialData[i].nsw_iron_ore;
        let NSW_Cu = financialData[i].nsw_copper;

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
        SA_Au_exp.push({date: date, value: SA_Au, commodity: Au_price});
        SA_Fe_exp.push({date: date, value: SA_Fe, commodity: Fe_price});
        SA_Cu_exp.push({date: date, value: SA_Cu, commodity: Cu_price});
        WA_Au_exp.push({date: date, value: WA_Au, commodity: Au_price});
        WA_Fe_exp.push({date: date, value: WA_Fe, commodity: Fe_price});
        WA_Cu_exp.push({date: date, value: WA_Cu, commodity: Cu_price});
        VIC_Au_exp.push({date: date, value: VIC_Au, commodity: Au_price});
        VIC_Fe_exp.push({date: date, value: VIC_Fe, commodity: Fe_price});
        VIC_Cu_exp.push({date: date, value: VIC_Cu, commodity: Cu_price});
        NT_Au_exp.push({date: date, value: NT_Au, commodity: Au_price});
        NT_Fe_exp.push({date: date, value: NT_Fe, commodity: Fe_price});
        NT_Cu_exp.push({date: date, value: NT_Cu, commodity: Cu_price});
        QLD_Au_exp.push({date: date, value: QLD_Au, commodity: Au_price});
        QLD_Fe_exp.push({date: date, value: QLD_Fe, commodity: Fe_price});
        QLD_Cu_exp.push({date: date, value: QLD_Cu, commodity: Cu_price});
        NSW_Au_exp.push({date: date, value: NSW_Au, commodity: Au_price});
        NSW_Fe_exp.push({date: date, value: NSW_Fe, commodity: Fe_price});
        NSW_Cu_exp.push({date: date, value: NSW_Cu, commodity: Cu_price});
    };

    // button interactivity
    const commodityButtons = document.querySelectorAll('.commodity');
    const stateButtons = document.querySelectorAll('.state');

    let selectedCommodity = null;
    let selectedState = null;

    function commodityButtonsClick(button) {
    // remove the 'active' class from all buttons
    commodityButtons.forEach(b => b.classList.remove('active'));
    // add the 'active' class to the clicked button
    button.classList.add('active');

    // set selected commodity
    selectedCommodity = button.dataset.commodity;

    // update chart
    updateChart();
    }

    function stateButtonsClick(button) {
    // remove the 'active' class from all buttons
    stateButtons.forEach(b => b.classList.remove('active'));
    // add the 'active' class to the clicked button
    button.classList.add('active');

    // set selected state
    selectedState = button.dataset.state;

    // update chart
    updateChart();
    }

    commodityButtons.forEach(button => {
    button.addEventListener('click', () => {
        commodityButtonsClick(button);
    });
    });

    stateButtons.forEach(button => {
    button.addEventListener('click', () => {
        stateButtonsClick(button);
    });
    });

    function updateChart() {
    // determine which button was clicked
    const commodityName = selectedCommodity;
    const stateName = selectedState;
    
    // determine which expenditure array to use
    let expenditureArray;
    switch (stateName) {
        case 'WA':
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
        break;
        case 'SA':
        switch (commodityName) {
            case 'Fe':
            expenditureArray = SA_Fe_exp;
            break;
            case 'Au':
            expenditureArray = SA_Au_exp;
            break;
            case 'Cu':
            expenditureArray = SA_Cu_exp;
            break;
        }
        break;
        case 'VIC':
        switch (commodityName) {
            case 'Fe':
            expenditureArray = VIC_Fe_exp;
            break;
            case 'Au':
            expenditureArray = VIC_Au_exp;
            break;
            case 'Cu':
            expenditureArray = VIC_Cu_exp;
            break;
        }
        break;
        case 'NT':
        switch (commodityName) {
            case 'Fe':
            expenditureArray = NT_Fe_exp;
            break;
            case 'Au':
            expenditureArray = NT_Au_exp;
            break;
            case 'Cu':
            expenditureArray = NT_Cu_exp;
            break;
        }
        break;
        case 'QLD':
        switch (commodityName) {
            case 'Fe':
            expenditureArray = QLD_Fe_exp;
            break;
            case 'Au':
            expenditureArray = QLD_Au_exp;
            break;
            case 'Cu':
            expenditureArray = QLD_Cu_exp;
            break;
        }
        break;
        case 'NSW':
        switch (commodityName) {
            case 'Fe':
            expenditureArray = NSW_Fe_exp;
            break;
            case 'Au':
            expenditureArray = NSW_Au_exp;
            break;
            case 'Cu':
            expenditureArray = NSW_Cu_exp;
            break;
        }
        break;
    }

    // run the code to create the chart using the selected expenditure array
    createChart(expenditureArray);
    }
    
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
        
        // create data and axis labels to be used on chart
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

        // configure chart axis positions
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
        // create chart 3
        const chart = new Chart(valueCtx, config);
    } 



});