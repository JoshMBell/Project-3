const commodity = "http://127.0.0.1:5000/commodity_prices";
const expendature = "http://127.0.0.1:5000/expendature";

Promise.all([
    d3.json(commodity),
    d3.json(expendature)
]).then(function([commodityData, expendatureData]){

    // save expendature data for WA by commodity and date
    let WA_Au_exp = [];
    let WA_Fe_exp = [];
    let WA_Cu_exp = [];
    //let WA_all_exp = [];

    for (let i = 0; i < expendatureData.length; i++){
        let dateString = expendatureData[i].date;
        let WA_Au = expendatureData[i].wa_gold;
        let WA_Fe = expendatureData[i].wa_iron_ore;
        let WA_Cu = expendatureData[i].wa_copper;

        // Convert datestring to new format
        let dateConvert = new Date(dateString);
        let day = dateConvert.getDate();
        let month = dateConvert.getMonth() + 1;
        let year = dateConvert.getFullYear();
        let paddedDay = day.toString().padStart(2, '0');
        let paddedMonth = month.toString().padStart(2, '0');
        let date = `${paddedDay}/${paddedMonth}/${year}`;

        // Push results to variables
        WA_Au_exp.push({date: date, value: WA_Au});
        WA_Fe_exp.push({date: date, value: WA_Fe});
        WA_Cu_exp.push({date: date, value: WA_Cu} );
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
      // create a new chartist chart
      const chart = new Chartist.Line('.ct-chart', {
        // pass in the expenditure data
        labels: expenditureArray.map(d => d.date),
        series: [
          expenditureArray.map(d => d.value)
        ]
      });
    }




    // text for top of dashboard:
    // Modify the text of an HTML element
    // d3.select(".text1").text("Hey, I changed this!");
});