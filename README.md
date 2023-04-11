# Project-3
  This project aims to look at the relationship between commodity prices and exploration expenditure, to better guide corporate spending habits for more profitable     exploration in the long run.

Data Processing:
  Exploration expenditure data was obtained from the Australian Bureau of Statistics
  Commodity price data was obtained from multpile sources: NASDAQ, London Metals Exchange, FRED Economic data
  Data was then cleaned in a combination of excel, and using python, in order to format dates and merge data.
  Merged data was exported into csv format, and loaded into an SQL database using pgAdmin4.
  Using the python plugin Flask, data was pulled from the SQL database and converted into json format, and pulled into JavaScrpt using the created API.
  Data can then be viewed by opening the index.html doc and viewing the dashboard

Setup:
  Using app.py, run the code and set up an active server with the local url. An SQL query pulls data in the required format from the database, saved as the variable "engine".
  The library "flask_cors" prevents any issues caused by cross-origin resource sharing (CORS) that occur as a result of index.html attempting to access data saved in the SQL database.
  Run index.html and select commodity/state data you wish to pull, and the date range.
  
Resources:
  JS libraries
    D3 - https://d3js.org/
    Chart.js - https://www.chartjs.org/docs/latest/
    
  Data Sources
    Exploration expenditure - https://www.abs.gov.au/statistics/industry/mining/mineral-and-petroleum-exploration-australia/latest-release?fbclid=IwAR2kG2qjuUhcNxo2vyqWh0OV4QqpyI62Q-TcTH8jg5UHNm3uKgdjP0AIlZo#cite-window1 
    Fe price - https://fred.stlouisfed.org/series/PIORECRUSDM#
    Cu price - https://www.lme.com/en/market-data/accessing-market-data/historical-data
    Au price - https://www.nasdaq.com/market-activity/commodities/gc:cmx/historical
    
  Code
    calculate stdev - https://stackoverflow.com/questions/7343890/standard-deviation-javascript
    SMA and EMA calculations - https://oliverjumpertz.com/the-moving-average-simple-and-exponential-theory-math-and-implementation-in-javascript/
 
    
     
