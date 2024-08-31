function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}



function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
}
