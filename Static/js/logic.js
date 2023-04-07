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

    let expendatureStates = [
        SA_Au_exp,
        SA_Fe_exp,  
        SA_Cu_exp,  
        WA_Au_exp,  
        WA_Fe_exp,  
        WA_Cu_exp,  
        VIC_Au_exp,  
        VIC_Fe_exp,  
        VIC_Cu_exp,  
        NT_Au_exp,  
        NT_Fe_exp,  
        NT_Cu_exp,  
        QLD_Au_exp,  
        QLD_Fe_exp,  
        QLD_Cu_exp,  
        NSW_Au_exp,  
        NSW_Fe_exp,  
        NSW_Cu_exp
    ];
    //let WA_all_exp = [];

    
    for (let i = 0; i < financialData.length; i++){
        let dateString = financialData[i].date;
        let SA_Au = Number(financialData[i].sa_gold);
        let SA_Fe = Number(financialData[i].sa_iron_ore);
        let SA_Cu = Number(financialData[i].sa_copper);
        let WA_Au = Number(financialData[i].wa_gold);
        let WA_Fe = Number(financialData[i].wa_iron_ore);
        let WA_Cu = Number(financialData[i].wa_copper);
        let VIC_Au = Number(financialData[i].vic_gold);
        let VIC_Fe = Number(financialData[i].vic_iron_ore);
        let VIC_Cu = Number(financialData[i].vic_copper);
        let NT_Au = Number(financialData[i].nt_gold);
        let NT_Fe = Number(financialData[i].nt_iron_ore);
        let NT_Cu = Number(financialData[i].nt_copper);
        let QLD_Au = Number(financialData[i].qld_gold);
        let QLD_Fe = Number(financialData[i].qld_iron_ore);
        let QLD_Cu = Number(financialData[i].qld_copper);
        let NSW_Au = Number(financialData[i].nsw_gold);
        let NSW_Fe = Number(financialData[i].nsw_iron_ore);
        let NSW_Cu = Number(financialData[i].nsw_copper);

        let Au_price = Number(financialData[i].au_usd_oz);
        let Fe_price = Number(financialData[i].fe_usd_tonne);
        let Cu_price = Number(financialData[i].cu_usd_pound);

    // Convert datestring to new format
        let dateConvert = new Date(dateString);
        let day = dateConvert.getDate();
        let month = dateConvert.getMonth() + 1;
        let year = dateConvert.getFullYear();
        let paddedDay = day.toString().padStart(2, '0');
        let paddedMonth = month.toString().padStart(2, '0');
        let date = `${paddedDay}/${paddedMonth}/${year}`;

        // TODO create % change data.
        let last_Au = i > 0 ? Number(financialData[i-1].au_usd_oz) : null;
        let last_Fe = i > 0 ? Number(financialData[i-1].fe_usd_tonne) : null;
        let last_Cu = i > 0 ? Number(financialData[i-1].cu_usd_pound) : null;

        let lastSA_Au = i > 0 ? Number(financialData[i-1].sa_gold) : null;
        let lastSA_Fe = i > 0 ? Number(financialData[i-1].sa_iron_ore) : null;
        let lastSA_Cu = i > 0 ? Number(financialData[i-1].sa_copper) : null;
        let lastWA_Au = i > 0 ? Number(financialData[i-1].wa_gold) : null;
        let lastWA_Fe = i > 0 ? Number(financialData[i-1].wa_iron_ore) : null;
        let lastWA_Cu = i > 0 ? Number(financialData[i-1].wa_copper) : null;
        let lastVIC_Au = i > 0 ? Number(financialData[i-1].vic_gold) : null;
        let lastVIC_Fe = i > 0 ? Number(financialData[i-1].vic_iron_ore) : null;
        let lastVIC_Cu = i > 0 ? Number(financialData[i-1].vic_copper) : null;
        let lastNT_Au = i > 0 ? Number(financialData[i-1].nt_gold) : null;
        let lastNT_Fe = i > 0 ? Number(financialData[i-1].nt_iron_ore) : null;
        let lastNT_Cu = i > 0 ? Number(financialData[i-1].nt_copper) : null;
        let lastQLD_Au = i > 0 ? Number(financialData[i-1].qld_gold) : null;
        let lastQLD_Fe = i > 0 ? Number(financialData[i-1].qld_iron_ore) : null;
        let lastQLD_Cu = i > 0 ? Number(financialData[i-1].qld_copper) : null;
        let lastNSW_Au = i > 0 ? Number(financialData[i-1].nsw_gold) : null;
        let lastNSW_Fe = i > 0 ? Number(financialData[i-1].nsw_iron_ore) : null;
        let lastNSW_Cu = i > 0 ? Number(financialData[i-1].nsw_copper) : null;

        let Au_pct_change = 0;
        let Fe_pct_change = 0;
        let Cu_pct_change = 0;

        let SA_Au_pct_change = 0;
        let SA_Fe_pct_change = 0;
        let SA_Cu_pct_change = 0;
        let WA_Au_pct_change = 0;
        let WA_Fe_pct_change = 0;
        let WA_Cu_pct_change = 0;
        let VIC_Au_pct_change = 0;
        let VIC_Fe_pct_change = 0;
        let VIC_Cu_pct_change = 0;
        let NT_Au_pct_change = 0;
        let NT_Fe_pct_change = 0;
        let NT_Cu_pct_change = 0;
        let QLD_Au_pct_change = 0;
        let QLD_Fe_pct_change = 0;
        let QLD_Cu_pct_change = 0;
        let NSW_Au_pct_change = 0;
        let NSW_Fe_pct_change = 0;
        let NSW_Cu_pct_change = 0;

        let SA_Au_value_ma = 0;
        let SA_Fe_value_ma = 0;
        let SA_Cu_value_ma = 0;
        let NSW_Au_value_ma = 0;
        let NSW_Fe_value_ma = 0;
        let NSW_Cu_value_ma = 0;
        let VIC_Au_value_ma = 0;
        let VIC_Fe_value_ma = 0;
        let VIC_Cu_value_ma = 0;
        let QLD_Au_value_ma = 0;
        let QLD_Fe_value_ma = 0;
        let QLD_Cu_value_ma = 0;
        let WA_Au_value_ma = 0;
        let WA_Fe_value_ma = 0;
        let WA_Cu_value_ma = 0;
        let NT_Au_value_ma = 0;
        let NT_Fe_value_ma = 0;
        let NT_Cu_value_ma = 0;


        //calc percent change in commodity prices
        if (Au_price !== null) {
            Au_pct_change = last_Au !== null ? ((Au_price - last_Au) / last_Au) * 100 : 0;
        }
        if (Fe_price !== null) {
            Fe_pct_change = last_Fe !== null ? ((Fe_price - last_Fe) / last_Fe) * 100 : 0;
        }
        if (Cu_price !== null) {
            Cu_pct_change = last_Cu !== null ? ((Cu_price - last_Cu) / last_Cu) * 100 : 0;
        }

        if (SA_Au !== null) {
            SA_Au_pct_change = lastSA_Au !== null ? ((SA_Au - lastSA_Au) / lastSA_Au) * 100 : 0;
            SA_Au_value_ma = lastSA_Au !== null ? (SA_Au + lastSA_Au) / 2 : 0;
        }
        if (SA_Fe !== null) {
            SA_Fe_pct_change = lastSA_Fe !== null ? ((SA_Fe - lastSA_Fe) / lastSA_Fe) * 100 : 0;
            SA_Fe_value_ma = lastSA_Fe !== null ? (SA_Fe + lastSA_Fe) / 2 : 0;
        }
        if (SA_Cu !== null) {
            SA_Cu_pct_change = lastSA_Cu !== null ? ((SA_Cu - lastSA_Cu) / lastSA_Cu) * 100 : 0;
            SA_Cu_value_ma = lastSA_Cu !== null ? (SA_Cu + lastSA_Cu) / 2 : 0;
        }

        if (NSW_Au !== null) {
            NSW_Au_pct_change = lastNSW_Au !== null ? ((NSW_Au - lastNSW_Au) / lastNSW_Au) * 100 : 0;
            NSW_Au_value_ma = lastNSW_Au !== null ? (NSW_Au + lastNSW_Au) / 2 : 0;
        }
        if (NSW_Fe !== null) {
            NSW_Fe_pct_change = lastNSW_Fe !== null ? ((NSW_Fe - lastNSW_Fe) / lastNSW_Fe) * 100 : 0;
            NSW_Fe_value_ma = lastNSW_Fe !== null ? (NSW_Fe + lastNSW_Fe) / 2 : 0;
        }
        if (NSW_Cu !== null) {
            NSW_Cu_pct_change = lastNSW_Cu !== null ? ((NSW_Cu - lastNSW_Cu) / lastNSW_Cu) * 100 : 0;
            NSW_Cu_value_ma = lastNSW_Cu !== null ? (NSW_Cu + lastNSW_Cu) / 2 : 0;
        }
    
        if (VIC_Au !== null) {
            VIC_Au_pct_change = lastVIC_Au !== null ? ((VIC_Au - lastVIC_Au) / lastVIC_Au) * 100 : 0;
            VIC_Au_value_ma = lastVIC_Au !== null ? (VIC_Au + lastVIC_Au) / 2 : 0;
        }
        if (VIC_Fe !== null) {
            VIC_Fe_pct_change = lastVIC_Fe !== null ? ((VIC_Fe - lastVIC_Fe) / lastVIC_Fe) * 100 : 0;
            VIC_Fe_value_ma = lastVIC_Fe !== null ? (VIC_Fe + lastVIC_Fe) / 2 : 0;
        }
        if (VIC_Cu !== null) {
            VIC_Cu_pct_change = lastVIC_Cu !== null ? ((VIC_Cu - lastVIC_Cu) / lastVIC_Cu) * 100 : 0;
            VIC_Cu_value_ma = lastVIC_Cu !== null ? (VIC_Cu + lastVIC_Cu) / 2 : 0;
        }

        if (QLD_Au !== null) {
            QLD_Au_pct_change = lastQLD_Au !== null ? ((QLD_Au - lastQLD_Au) / lastQLD_Au) * 100 : 0;
            QLD_Au_value_ma = lastQLD_Au !== null ? (QLD_Au + lastQLD_Au) / 2 : 0;
        }
        if (QLD_Fe !== null) {
            QLD_Fe_pct_change = lastQLD_Fe !== null ? ((QLD_Fe - lastQLD_Fe) / lastQLD_Fe) * 100 : 0;
            QLD_Fe_value_ma = lastQLD_Fe !== null ? (QLD_Fe + lastQLD_Fe) / 2 : 0;
        }
        if (QLD_Cu !== null) {
            QLD_Cu_pct_change = lastQLD_Cu !== null ? ((QLD_Cu - lastQLD_Cu) / lastQLD_Cu) * 100 : 0;
            QLD_Cu_value_ma = lastQLD_Cu !== null ? (QLD_Cu + lastQLD_Cu) / 2 : 0;
        }
        
        if (WA_Au !== null) {
            WA_Au_pct_change = lastWA_Au !== null ? ((WA_Au - lastWA_Au) / lastWA_Au) * 100 : 0;
            WA_Au_value_ma = lastWA_Au !== null ? (WA_Au + lastWA_Au) / 2 : 0;
        }
        if (WA_Fe !== null) {
            WA_Fe_pct_change = lastWA_Fe !== null ? ((WA_Fe - lastWA_Fe) / lastWA_Fe) * 100 : 0;
            WA_Fe_value_ma = lastWA_Fe !== null ? (WA_Fe + lastWA_Fe) / 2 : 0;
        }
        if (WA_Cu !== null) {
            WA_Cu_pct_change = lastWA_Cu !== null ? ((WA_Cu - lastWA_Cu) / lastWA_Cu) * 100 : 0;
            WA_Cu_value_ma = lastWA_Cu !== null ? (WA_Cu + lastWA_Cu) / 2 : 0;
        }

        if (NT_Au !== null) {
            NT_Au_pct_change = lastNT_Au !== null ? ((NT_Au - lastNT_Au) / lastNT_Au) * 100 : 0;
            NT_Au_value_ma = lastNT_Au !== null ? (NT_Au + lastNT_Au) / 2 : 0;
        }
        if (NT_Fe !== null) {
            NT_Fe_pct_change = lastNT_Fe !== null ? ((NT_Fe - lastNT_Fe) / lastNT_Fe) * 100 : 0;
            NT_Fe_value_ma = lastNT_Fe !== null ? (NT_Fe + lastNT_Fe) / 2 : 0;
        }
        if (NT_Cu !== null) {
            NT_Cu_pct_change = lastNT_Cu !== null ? ((NT_Cu - lastNT_Cu) / lastNT_Cu) * 100 : 0;
            NT_Cu_value_ma = lastNT_Cu !== null ? (NT_Cu + lastNT_Cu) / 2 : 0;
        }

        // calculate % change difference between commodity vs expendature.

        // Push results to variables
        SA_Au_exp.push({
            date: date,
            value: SA_Au,
            value_pct_change: SA_Au_pct_change,
            value_ma: SA_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        SA_Fe_exp.push({
            date: date,
            value: SA_Fe,
            value_pct_change: SA_Fe_pct_change,
            value_ma: SA_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        SA_Cu_exp.push({
            date: date,
            value: SA_Cu,
            value_pct_change: SA_Cu_pct_change,
            value_ma: SA_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
        WA_Au_exp.push({
            date: date,
            value: WA_Au,
            value_pct_change: WA_Au_pct_change,
            value_ma: WA_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        WA_Fe_exp.push({
            date: date,
            value: WA_Fe,
            value_pct_change: WA_Fe_pct_change,
            value_ma: WA_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        WA_Cu_exp.push({
            date: date,
            value: WA_Cu,
            value_pct_change: WA_Cu_pct_change,
            value_ma: WA_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
        VIC_Au_exp.push({
            date: date,
            value: VIC_Au,
            value_pct_change: VIC_Au_pct_change,
            value_ma: VIC_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        VIC_Fe_exp.push({
            date: date,
            value: VIC_Fe,
            value_pct_change: VIC_Fe_pct_change,
            value_ma: VIC_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        VIC_Cu_exp.push({
            date: date,
            value: VIC_Cu,
            value_pct_change: VIC_Cu_pct_change,
            value_ma: VIC_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
        NT_Au_exp.push({
            date: date,
            value: NT_Au,
            value_pct_change: NT_Au_pct_change,
            value_ma: NT_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        NT_Fe_exp.push({
            date: date,
            value: NT_Fe,
            value_pct_change: NT_Fe_pct_change,
            value_ma: NT_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        NT_Cu_exp.push({
            date: date,
            value: NT_Cu,
            value_pct_change: NT_Cu_pct_change,
            value_ma: NT_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
        QLD_Au_exp.push({
            date: date,
            value: QLD_Au,
            value_pct_change: QLD_Au_pct_change,
            value_ma: QLD_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        QLD_Fe_exp.push({
            date: date,
            value: QLD_Fe,
            value_pct_change: QLD_Fe_pct_change,
            value_ma:QLD_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        QLD_Cu_exp.push({
            date: date,
            value: QLD_Cu,
            value_pct_change: QLD_Cu_pct_change,
            value_ma: QLD_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
        NSW_Au_exp.push({
            date: date,
            value: NSW_Au,
            value_pct_change: NSW_Au_pct_change,
            value_ma: NSW_Au_value_ma,
            commodity: Au_price,
            commodity_pct_change: Au_pct_change
        });
        NSW_Fe_exp.push({
            date: date,
            value: NSW_Fe,
            value_pct_change: NSW_Fe_pct_change,
            value_ma: NSW_Fe_value_ma,
            commodity: Fe_price,
            commodity_pct_change: Fe_pct_change
        });
        NSW_Cu_exp.push({
            date: date,
            value: NSW_Cu,
            value_pct_change: NSW_Cu_pct_change,
            value_ma: NSW_Cu_value_ma,
            commodity: Cu_price,
            commodity_pct_change: Cu_pct_change
        });
    };
    // add moving average to each object:

    
    console.log(WA_Au_exp);
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
    createCharts(expenditureArray);
    }
    
    // function to create the chart
    function createCharts(expenditureArray) {
        const chartDiv1 = document.querySelector('.chart1');
        const chartDiv2 = document.querySelector('.chart2');
        const chartDiv3 = document.querySelector('.chart3');

        // remove any existing canvas elements from the chartDivs
        chartDiv1.querySelectorAll('canvas').forEach(canvas => {
            const chart = Chart.instances[canvas.id];
            if (chart) {
                chart.destroy();
            }
            canvas.remove();
        });
        chartDiv2.querySelectorAll('canvas').forEach(canvas => {
            const chart = Chart.instances[canvas.id];
            if (chart) {
                chart.destroy();
            }
            canvas.remove();
        });
        chartDiv3.querySelectorAll('canvas').forEach(canvas => {
            const chart = Chart.instances[canvas.id];
            if (chart) {
                chart.destroy();
            }
            canvas.remove();
        });

        // format data to be used in plots
        const dates = expenditureArray.map(obj => obj.date);
        const values = expenditureArray.map(obj => obj.value_ma);
        let commodities = expenditureArray.map(obj => obj.commodity);
        commodities = commodities.map(Number);

        // create new canvas elements for each chart
        const valueCanvas1 = document.createElement('canvas');
        valueCanvas1.width = 800;
        valueCanvas1.height = 400;
        chartDiv1.appendChild(valueCanvas1);

        const valueCanvas2 = document.createElement('canvas');
        valueCanvas2.width = 800;
        valueCanvas2.height = 400;
        chartDiv2.appendChild(valueCanvas2);

        const valueCanvas3 = document.createElement('canvas');
        valueCanvas3.width = 800;
        valueCanvas3.height = 400;
        chartDiv3.appendChild(valueCanvas3);

        // data for chart 1
        const valueCtx1 = valueCanvas1.getContext('2d');
        const data1 = {
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

        // configure for chart 1
        const config1 = {
            type: 'line',
            data: data1,
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

        // data for chart 2
        const valueCtx2 = valueCanvas2.getContext('2d');
        const data2 = {
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
                    },
                    commodity_y: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'right' 
                    }
                }
            }
        }

        // data for chart 3
        const valueCtx3 = valueCanvas3.getContext('2d');
        const data3 = {
            labels: dates,
            datasets: [{
                label: 'Expendature (AUD mil)',
                data: values,
                yAxisID: 'value_y',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
            },{
                label: 'Commodity',
                data: commodities,
                yAxisID: 'commodity_y',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
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

        // create chart 1
        const chart1 = new Chart(valueCtx1, config1);
        // create chart 1
        const chart2 = new Chart(valueCtx2, config2);
        // create chart 3
        const chart3 = new Chart(valueCtx3, config3);
    } 

});