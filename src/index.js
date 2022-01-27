/* This is simple script allow get the height of all NBA players that match
  with an initial parameter */

const height = process.argv[2];
const dataRequest = require('./modules/dataRequest');
const filterData = require('./modules/filterData');
const printPairs = require('./modules/printPairs');

async function main(height) {
  const rawData = await dataRequest();
  const playersList = await filterData({ list: rawData.values, height: height });
  const finalPrint = await printPairs({ playersList: playersList })
}

// Initial verification for height as console arg.
if (!height) {
  console.log(` Error: 
    Please prvide a number as argument: npm start <height in inches>
  `);
  return;
}

main(height).catch((error) => {
  return console.log(error)
})
