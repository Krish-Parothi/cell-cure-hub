const fs = require('fs');

const svg = fs.readFileSync('c:/dev/cell-cure-hub/public/india.svg', 'utf-8');
const idMatch = svg.match(/id=['"]([^'"]+)['"]/g);
console.log("IDs found: ", idMatch.slice(0, 10).join(', '));
