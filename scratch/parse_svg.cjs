const fs = require('fs');
const svg = fs.readFileSync('c:/dev/cell-cure-hub/public/india.svg', 'utf-8');

function getBBox(pathStr) {
    const coords = pathStr.match(/-?\d+\.?\d*/g);
    if (!coords) return null;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    // The path contains absolute and relative commands, this is a rough approximation 
    // assuming it starts with absolute 'm' or 'M' and then is relative 'l', 'c', etc.
    // Actually, properly parsing SVG path is complex. 
    // Let's just grab all coordinates and since it's a huge list of absolute and relative coords, 
    // Wait, if it has 'm x,y' then it might have relative coordinates. 
    // Let's print out the first 20 commands to see.
}

const mhMatch = svg.match(/<path[^>]*id="mh"[^>]*d="([^"]+)"/i);
if (mhMatch) {
    console.log(mhMatch[1].substring(0, 100));
}
const cgMatch = svg.match(/<path[^>]*name="Chhattisgarh"[^>]*d="([^"]+)"/i);
if (cgMatch) {
    console.log("CG start:", cgMatch[1].substring(0, 100));
}
