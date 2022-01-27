const filterData = require("./filterData");

function printPairs({ playersList }) {
    if (playersList.length === 0){
        console.log("Not matches found");
        return;
    }
    for(let i = 0; i < playersList.length - 1;) {
        console.log(`- ${playersList[i].first_name} ${playersList[i].last_name}        ${playersList[i + 1].first_name} ${playersList[i + 1].last_name} `)
        i += 2
    }
    return;
  }
  
  module.exports = printPairs;
  