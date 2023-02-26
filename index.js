let c = document.getElementById("myCanvas");
// c.style.width = "100%";
// c.style.height = "100%";
let ctx = c.getContext("2d");

let coordinates = [];

c.addEventListener("click",function(event) {
    const currentCoordinate = {"x" : event.x,"y" : event.y};
    console.log(currentCoordinate);
    coordinates.push(currentCoordinate);
    const lastCoordinate = coordinates.length - 1;
    if(typeof coordinates[lastCoordinate - 1] != "undefined")
    {
        const startCoordinate = coordinates[lastCoordinate - 1];
        const toCoordinate = coordinates[lastCoordinate];
        ctx.beginPath();
        ctx.moveTo(startCoordinate.x,startCoordinate.y);
        ctx.lineTo(toCoordinate.x,toCoordinate.y);
        ctx.stroke();
    }
})