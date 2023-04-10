const financial = "http://127.0.0.1:5000/financial_data"
let financialData;

d3.json(financial).then(function(data){
    financialData =  data;
    filterDates();
});

function filterDates() {
    let startDate = new Date(document.getElementById('startDate').value);
    let endDate = new Date(document.getElementById('endDate').value);
    let filteredData = financialData.filter(function(d) {
        let date = new Date(d.date);
        return date >= startDate && date <= endDate;
      });

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

    let Fe_pieChart = {
        WA_Fe_exp: 0,
        SA_Fe_exp: 0,
        VIC_Fe_exp: 0,
        NT_Fe_exp: 0,
        QLD_Fe_exp: 0,
        NSW_Fe_exp: 0
    };
    let Au_pieChart = {
        WA_Au_exp: 0,
        SA_Au_exp: 0,
        VIC_Au_exp: 0,
        NT_Au_exp: 0,
        QLD_Au_exp: 0,
        NSW_Au_exp: 0
    };
    let Cu_pieChart = {
        WA_Cu_exp: 0,
        SA_Cu_exp: 0,
        VIC_Cu_exp: 0,
        NT_Cu_exp: 0,
        QLD_Cu_exp: 0,
        NSW_Cu_exp: 0
    };

    // Get data based on date filter range
    function getData(){
        for (let i = 0; i < filteredData.length; i++){
            let dateString = filteredData[i].date;
            let SA_Au = i > 0 ? Number(filteredData[i].sa_gold) : null;
            let SA_Fe = i > 0 ? Number(filteredData[i].sa_iron_ore) : null;
            let SA_Cu = i > 0 ? Number(filteredData[i].sa_copper) : null;
            let WA_Au = i > 0 ? Number(filteredData[i].wa_gold) : null;
            let WA_Fe = i > 0 ? Number(filteredData[i].wa_iron_ore) : null;
            let WA_Cu = i > 0 ? Number(filteredData[i].wa_copper) : null;
            let VIC_Au = i > 0 ? Number(filteredData[i].vic_gold) : null;
            let VIC_Fe = i > 0 ? Number(filteredData[i].vic_iron_ore) : null;
            let VIC_Cu = i > 0 ? Number(filteredData[i].vic_copper) : null;
            let NT_Au = i > 0 ? Number(filteredData[i].nt_gold) : null;
            let NT_Fe = i > 0 ? Number(filteredData[i].nt_iron_ore) : null;
            let NT_Cu = i > 0 ? Number(filteredData[i].nt_copper) : null;
            let QLD_Au = i > 0 ? Number(filteredData[i].qld_gold) : null;
            let QLD_Fe = i > 0 ? Number(filteredData[i].qld_iron_ore) : null;
            let QLD_Cu = i > 0 ? Number(filteredData[i].qld_copper) : null;
            let NSW_Au = i > 0 ? Number(filteredData[i].nsw_gold) : null;
            let NSW_Fe = i > 0 ? Number(filteredData[i].nsw_iron_ore) : null;
            let NSW_Cu = i > 0 ? Number(filteredData[i].nsw_copper) : null;

            let Au_price = Number(filteredData[i].au_usd_oz);
            let Fe_price = Number(filteredData[i].fe_usd_tonne);
            let Cu_price = Number(filteredData[i].cu_usd_pound);

            // Convert datestring to new format
            let dateConvert = new Date(dateString);
            let day = dateConvert.getDate();
            let month = dateConvert.getMonth() + 1;
            let year = dateConvert.getFullYear();
            let paddedDay = day.toString().padStart(2, '0');
            let paddedMonth = month.toString().padStart(2, '0');
            let date = `${paddedDay}/${paddedMonth}/${year}`;

            // Push results to variables
            SA_Au_exp.push({
                date: date,
                value: SA_Au,
                commodity: Au_price
            });
            SA_Fe_exp.push({
                date: date,
                value: SA_Fe,
                commodity: Fe_price
            });
            SA_Cu_exp.push({
                date: date,
                value: SA_Cu,
                commodity: Cu_price
            });
            WA_Au_exp.push({
                date: date,
                value: WA_Au,
                commodity: Au_price
            });
            WA_Fe_exp.push({
                date: date,
                value: WA_Fe,
                commodity: Fe_price
            });
            WA_Cu_exp.push({
                date: date,
                value: WA_Cu,
                commodity: Cu_price
            });
            VIC_Au_exp.push({
                date: date,
                value: VIC_Au,
                commodity: Au_price
            });
            VIC_Fe_exp.push({
                date: date,
                value: VIC_Fe,
                commodity: Fe_price
            });
            VIC_Cu_exp.push({
                date: date,
                value: VIC_Cu,
                commodity: Cu_price,
            });
            NT_Au_exp.push({
                date: date,
                value: NT_Au,
                commodity: Au_price
            });
            NT_Fe_exp.push({
                date: date,
                value: NT_Fe,
                commodity: Fe_price
            });
            NT_Cu_exp.push({
                date: date,
                value: NT_Cu,
                commodity: Cu_price
            });
            QLD_Au_exp.push({
                date: date,
                value: QLD_Au,
                commodity: Au_price
            });
            QLD_Fe_exp.push({
                date: date,
                value: QLD_Fe,
                commodity: Fe_price
            });
            QLD_Cu_exp.push({
                date: date,
                value: QLD_Cu,
                commodity: Cu_price
            });
            NSW_Au_exp.push({
                date: date,
                value: NSW_Au,
                commodity: Au_price
            });
            NSW_Fe_exp.push({
                date: date,
                value: NSW_Fe,
                commodity: Fe_price
            });
            NSW_Cu_exp.push({
                date: date,
                value: NSW_Cu,
                commodity: Cu_price
            });

            // data for pie charts
            Fe_pieChart[`WA_Fe_exp`] += WA_Fe;
            Fe_pieChart[`SA_Fe_exp`] += SA_Fe;
            Fe_pieChart[`VIC_Fe_exp`] += VIC_Fe;
            Fe_pieChart[`NT_Fe_exp`] += NT_Fe;
            Fe_pieChart[`QLD_Fe_exp`] += QLD_Fe;
            Fe_pieChart[`NSW_Fe_exp`] += NSW_Fe;
            
            Au_pieChart[`WA_Au_exp`] += WA_Au;
            Au_pieChart[`SA_Au_exp`] += SA_Au;
            Au_pieChart[`VIC_Au_exp`] += VIC_Au;
            Au_pieChart[`NT_Au_exp`] += NT_Au;
            Au_pieChart[`QLD_Au_exp`] += QLD_Au;
            Au_pieChart[`NSW_Au_exp`] += NSW_Au;
            
            Cu_pieChart[`WA_Cu_exp`] += WA_Cu;
            Cu_pieChart[`SA_Cu_exp`] += SA_Cu;
            Cu_pieChart[`VIC_Cu_exp`] += VIC_Cu;
            Cu_pieChart[`NT_Cu_exp`] += NT_Cu;
            Cu_pieChart[`QLD_Cu_exp`] += QLD_Cu;
            Cu_pieChart[`NSW_Cu_exp`] += NSW_Cu;   
        }
        updateLineChart();
        updateNormalisedChart();
        updatePieChart();
    }

    // functions to calculate a 4point SMA Array
    function simpleMovingAverage(value, window = 4, n = Infinity) {
        if (!value || value.length < window) {
          return [];
        }
        let index = window - 1;
        const length = value.length + 1;
        const simpleMovingAverages = [];
        let numberOfSMAsCalculated = 0;
        while (++index < length && numberOfSMAsCalculated++ < n) {
          const windowSlice = value.slice(index - window, index);
          const sum = windowSlice.reduce((prev, curr) => prev + curr, 0);
          simpleMovingAverages.push(sum / window);
        }
        return simpleMovingAverages;
    }
      // run calculate EMA when needed (this function also uses simpleMovingAverage())
    function exponentialMovingAverage(values, window = 4) {
        if (!values || values.length < window) {
          return [];
        }
        let index = window - 1;
        let previousEmaIndex = 0;
        const length = values.length;
        const smoothingFactor = 2 / (window + 1);
        const exponentialMovingAverages = [];
        const [sma] = simpleMovingAverage(values, window, 1);
        exponentialMovingAverages.push(sma);
        while (++index < length) {
          const value = values[index];
          const previousEma = exponentialMovingAverages[previousEmaIndex++];
          const currentEma = (value - previousEma) * smoothingFactor + previousEma;
          exponentialMovingAverages.push(currentEma);
        }
        return exponentialMovingAverages;
    }

    // Button interactivity
    const commodityButtons = document.querySelectorAll('.commodity');
    const stateButtons = document.querySelectorAll('.state');

    let selectedCommodity = 'Fe';
    let selectedState = 'WA';
    
    // Draw charts
    getData();

    // Determine which buttons are active
    function commodityButtonsClick(button) {
        commodityButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        selectedCommodity = button.dataset.commodity;
        updatePieChart();
        updateNormalisedChart();
        updateLineChart();
    }

    function stateButtonsClick(button) {
        stateButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        selectedState = button.dataset.state;
        updateNormalisedChart();
        updateLineChart();
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

    // Update pie chart based on which commodity is selected
    function updatePieChart(){
        let commodityName = selectedCommodity;
        let pieArray;

        switch (commodityName) {
            case 'Fe':
            pieArray = Fe_pieChart;
            break;
            case 'Au':
            pieArray = Au_pieChart;
            break;
            case 'Cu':
            pieArray = Cu_pieChart;
            break;
        }
        createPieChart(pieArray)
    }

    function createPieChart(pieArray) {
        const chartDiv1 = document.querySelector('.chart1');

        chartDiv1.querySelectorAll('canvas').forEach(canvas => {
            if (canvas.closest('.chart1') === chartDiv1) {
                const chart = Chart.instances[canvas.id];
                if (chart) {
                    chart.destroy();
                }
                canvas.remove();
            }
        });
    
        // Set up data for pie chart
        const data1 = {
            datasets: [{
                data: Object.values(pieArray),
                label: 'expenditure millions',
                hoverOffset: 7
            }],
    
            labels: [
                `WA ${selectedCommodity} expenditure`,
                `SA ${selectedCommodity} expenditure`,
                `VIC ${selectedCommodity} expenditure`,
                `NT ${selectedCommodity} expenditure`,
                `QLD ${selectedCommodity} expenditure`,
                `NSW ${selectedCommodity} expenditure`
            ]
        };
    
        // Configure doughnut chart
        const config1 = {
            type: 'doughnut',
            data: data1,
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'left'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }

        // set up canvas for chart 1
        const valueCanvas1 = document.createElement('canvas');
        valueCanvas1.width = 800;
        valueCanvas1.height = 400;
        chartDiv1.appendChild(valueCanvas1);
        const ctx = valueCanvas1.getContext('2d');
        const chart = new Chart(ctx, config1);
    }

    // set up chart 2
    function updateNormalisedChart() {
        const commodityName = selectedCommodity;
        const stateName = selectedState;
        
        // determine which expenditure array to use based on active buttons (combination of commodity and State)
        let diffArray;
        switch (stateName) {
            case 'WA':
            switch (commodityName) {
                case 'Fe':
                diffArray = WA_Fe_exp;
                break;
                case 'Au':
                diffArray = WA_Au_exp;
                break;
                case 'Cu':
                diffArray = WA_Cu_exp;
                break;
            }
            break;
            case 'SA':
            switch (commodityName) {
                case 'Fe':
                diffArray = SA_Fe_exp;
                break;
                case 'Au':
                diffArray= SA_Au_exp;
                break;
                case 'Cu':
                diffArray = SA_Cu_exp;
                break;
            }
            break;
            case 'VIC':
            switch (commodityName) {
                case 'Fe':
                diffArray = VIC_Fe_exp;
                break;
                case 'Au':
                diffArray = VIC_Au_exp;
                break;
                case 'Cu':
                diffArray = VIC_Cu_exp;
                break;
            }
            break;
            case 'NT':
            switch (commodityName) {
                case 'Fe':
                diffArray = NT_Fe_exp;
                break;
                case 'Au':
                diffArray = NT_Au_exp;
                break;
                case 'Cu':
                diffArray = NT_Cu_exp;
                break;
            }
            break;
            case 'QLD':
            switch (commodityName) {
                case 'Fe':
                diffArray = QLD_Fe_exp;
                break;
                case 'Au':
                diffArray = QLD_Au_exp;
                break;
                case 'Cu':
                diffArray = QLD_Cu_exp;
                break;
            }
            break;
            case 'NSW':
            switch (commodityName) {
                case 'Fe':
                diffArray= NSW_Fe_exp;
                break;
                case 'Au':
                diffArray = NSW_Au_exp;
                break;
                case 'Cu':
                diffArray = NSW_Cu_exp;
                break;
            }
            break;
        }
        createNormalisedChart(diffArray);
    }

    function createNormalisedChart(diffArray){
        const chartDiv2 = document.querySelector('.chart2');
        // format data for plot
        // filter out objects with null values
        const filteredData = diffArray.filter(obj => obj.value !== null && obj.commodity !== null);
        const filteredDates = filteredData.map(obj => obj.date);
        
        // extract the value and commodity data
        const xData = filteredData.map(data => data.value);
        const yData = filteredData.map(data => data.commodity);
        
        // get moving averages of data Arrays
        const xDataMA = exponentialMovingAverage(xData);
        const yDataMA = exponentialMovingAverage(yData);

        // calculate the mean and standard deviation of the data
        const xMean = xDataMA.reduce((a, b) => a + b) / xDataMA.length;
        const yMean = yDataMA.reduce((a, b) => a + b) / yDataMA.length;
    
        const xStdDev = Math.sqrt(xDataMA.reduce((sq, n) => sq + Math.pow(n - xMean, 2), 0) / (xDataMA.length - 1));
        const yStdDev = Math.sqrt(yDataMA.reduce((sq, n) => sq + Math.pow(n - yMean, 2), 0) / (yDataMA.length - 1));
    
        // normalize the data 
        const normalizedXData = xDataMA.map(x => x / xStdDev).map(x => x === 0 ? null : x);
        const normalizedYData = yDataMA.map(y => y / yStdDev).map(y => y === 0 ? null : y);
    
        // push normalized data to a new variable in the same object
        diffArray.normalizedExpenditure = normalizedXData;
        diffArray.normalizedCommodity = normalizedYData;
    
        // calculate normalized difference
        let normalizedDifference = normalizedXData.map((x, i) => x - normalizedYData[i]);
    
        chartDiv2.querySelectorAll('canvas').forEach(canvas => {
            if (canvas.closest('.chart2') === chartDiv2) {
                const chart = Chart.instances[canvas.id];
                if (chart) {
                    chart.destroy();
                }
                canvas.remove();
            }  
        });
    
        // create new canvas elements for chart 2
        const valueCanvas2 = document.createElement('canvas');
        valueCanvas2.width = 800;
        valueCanvas2.height = 400;
        chartDiv2.appendChild(valueCanvas2);
    
        // data for chart 2
        const valueCtx2 = valueCanvas2.getContext('2d');
        const data2 = {
            labels: filteredDates,
            datasets: [{
                label: 'Normalised Difference (Expenditure (4MA) - Commodity price)',
                data: normalizedDifference,
                yAxisID: 'value_y',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: {
                    target: 'origin',
                    above: 'rgb(0, 255, 0, 0.2)',
                    below: 'rgb(255, 0, 0, 0.2)'
                },
                borderWidth: 2,
                pointRadius: 0,
            }]
        };
    
        // configure for chart 2
        const config2 = {
            type: 'line',
            data: data2,
            options: {
                scales: {
                    value_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'left'
                    }
                }
            }
        }
        // create chart 2
        const chart2 = new Chart(valueCtx2, config2);
    }

    function updateLineChart() {
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
        createLineChart(expenditureArray);
    }

    // function to create line the chart
    function createLineChart(expenditureArray) {
        
        const chartDiv3 = document.querySelector('.chart3');

        // remove any existing canvas elements from the chartDivs
        chartDiv3.querySelectorAll('canvas').forEach(canvas => {
            if (canvas.closest('.chart3') === chartDiv3) {
                const chart = Chart.instances[canvas.id];
                if (chart) {
                    chart.destroy();
                }
            canvas.remove();
            }  
        });

        // format data to be used in plots
        const dates = expenditureArray.map(obj => obj.date);
        const values = expenditureArray.map(obj => obj.value);
        let commodities = expenditureArray.map(obj => obj.commodity);
        
        let values4EMA = exponentialMovingAverage(values);
        // determine price units for selected commodity
        let commodityUnits;

        if (selectedCommodity === 'Fe') {
            commodityUnits = 'USD/tonne';
        } else if (selectedCommodity === 'Cu') {
            commodityUnits = 'USD/lb';
        } else if (selectedCommodity === 'Au') {
            commodityUnits = 'USD/oz';
        } else {
            commodityUnits = 'Unknown commodity';
        }

        const valueCanvas3 = document.createElement('canvas');
        valueCanvas3.width = 800;
        valueCanvas3.height = 400;
        chartDiv3.appendChild(valueCanvas3);

        // data for chart 3
        const valueCtx3 = valueCanvas3.getContext('2d');
        const data3 = {
            labels: dates,
            datasets: [{
                label: 'Expenditure (AUD mil)',
                data: values,
                yAxisID: 'value_y',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointRadius: 2
            },{
                label: `Commodity price ${commodityUnits}`,
                data: commodities,
                yAxisID: 'commodity_y',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                pointRadius: 2
            },{
                label: 'Expenditure 4pt MA',
                data: values4EMA,
                yAxisID: 'value_y',
                borderColor: 'rgba(0, 0, 255, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointRadius: 0
            }]
        };

        // configure for chart 3
        const config3 = {
            type: 'line',
            data: data3,
            options: {
                scales: {
                    value_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'left',
                    },
                    commodity_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'right' 
                    },
                    value_4MA: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'left',
                        display: false 
                    }
                }
            }
        }
        
        // create chart 3
        const chart3 = new Chart(valueCtx3, config3);
    } 
}