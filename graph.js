/////////////////////////////////////////////////////
//////// Dynamic d3 graph displayed to user /////////
/////////////////////////////////////////////////////

// set up the dimensions of the chart
const dims = {
    height: 300,
    width: 300,
    radius: 150
}

// determine the center of my chart
const cent = {
    x: (dims.width / 2 + 5),
    // chart cntr -^     ^-- 5px to right
    y: (dims.height / 2 + 5)
}

// create the SVG container for the graph
const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', dims.width + 150)
    // add space for legend -----^
    .attr('height', dims.height + 150)

// create a group w/ graph elements and append
const graph = svg.append('g')
    // append group ----^     ^-- g for group
    // transform group to translate it to center
    .attr('transform', `translate(${cent.x}, ${cent.y})`);

/////////////////////////////////////////////////////
////////// generate our pie graph angles ////////////
/* this is a function that will receive data (often,
    in the form of an array), not sort it, and then
    evaluate each data element to determine the
    correct angle for my pie chart */
/////////////////////////////////////////////////////
const pie = d3.pie()
    // tell d3 don't sort angles based on size
    .sort(null)
    // make angles based on cost property
    .value(d => d.cost);
    //     ^--- d for data object

const angles = pie([
    { name: 'rent', cost: 500 },
    { name: 'bills', cost: 300 },
    { name: 'gaming', cost: 200 }
])

console.log(angles);