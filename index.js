let ClearButton = document.getElementById("ClearButton");
let DrawButton = document.getElementById("DrawButton");

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let DrawType = {
    aInternal: "",
    aListener: function(val) {},
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};

c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener("resize",function () {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
})

let coordinates = [];

ClearButton.addEventListener("click",function (event) {
    ctx.clearRect(0, 0, c.width, c.height);
})

DrawButton.addEventListener("click",function (event) {
    console.log("Type: " + DrawType.a);
    if(DrawType.a == "Draw")
    {
        DrawType.a = "";
    }else{
        DrawType.a = "Draw";
    }
})

function OpenDrawLine(event)
{
    const currentCoordinate = {"x" : event.x,"y" : event.y};
    coordinates.push(currentCoordinate);
    const lastCoordinate = coordinates.length - 1;
    if(typeof coordinates[lastCoordinate - 1] != "undefined")
    {
        const startCoordinate = coordinates[lastCoordinate - 1];
        const toCoordinate = coordinates[lastCoordinate];
        ctx.beginPath();
        ctx.moveTo(startCoordinate.x,startCoordinate.y);
        ctx.lineTo(toCoordinate.x,toCoordinate.y);
        ctx.strokeStyle = "#32a852"
        ctx.stroke();
    }
}

DrawType.registerListener(function (val) {
    switch (val) {
        case "Draw" :  {
            c.addEventListener("mousemove",function(event) {
                const currentCoordinate = {"x" : event.x,"y" : event.y};
                coordinates.push(currentCoordinate);
                const lastCoordinate = coordinates.length - 1;
                if(typeof coordinates[lastCoordinate - 1] != "undefined")
                {
                    const startCoordinate = coordinates[lastCoordinate - 1];
                    const toCoordinate = coordinates[lastCoordinate];
                    ctx.beginPath();
                    ctx.moveTo(startCoordinate.x,startCoordinate.y);
                    ctx.lineTo(toCoordinate.x,toCoordinate.y);
                    ctx.strokeStyle = "#32a852"
                    ctx.stroke();
                }
            })
            break;
        }default : {
            c.removeEventListener("mousedown", handleMouseDown, true); // Succeeds
        }
    }
})