function calculateVolume(radius) {
    //This function only calculates the volume of a sphere
    return (4 * Math.PI * Math.pow(radius, 3)) / 3;
}
function isRadiusValid(radius) {
    if (radius < 0) {
        //negative values
        return false;
    } else if (radius === "0" || radius === "-0") {
        // zero or if by mistake we entered -0
        return false;
    } else if (isNaN(radius)) {
        //anything that is not a number
        return false;
    }
    else if (radius === "") {
        // an empty input
        return false;
    }
    return true;

}
function showVolume() {

    let radius = document.getElementById("inputRadius").value; //getting the radios from the input

    if (!isRadiusValid(radius)) {
        if (radius === "") {
            radius = "an empty string";
        }
        alert(`You Have entered a wrong radios value,\nYou have to enter a positive integer and your input was ${radius}.`);
        document.getElementById("inputRadius").value = "";
        document.getElementById("sphereVolume").innerText = "Sphere Volume";
        return;
    }

    const volume = calculateVolume(radius);
    const spanSphere = document.getElementById("sphereVolume");

    if (drawOnCanvas(radius)) {
        return;
    }
    spanSphere.innerText = `${volume.toFixed(5)}`;
}
function drawOnCanvas(radius) {

    const myCanvas = document.getElementById("myCanvas").getContext("2d");
    const canvasWidth = document.getElementById("myCanvas").width;
    const canvasHeight = document.getElementById("myCanvas").height;

    const radius_int = parseInt(radius);
    if (radius > canvasHeight / 2) {
        alert("the radios needs to be smaller than " + canvasHeight / 2);
        document.getElementById("inputRadius").value = "";
        document.getElementById("sphereVolume").innerText = "Sphere Volume";
        return true;
    }
    myCanvas.beginPath();
    myCanvas.strokeStyle = "blue";
    myCanvas.arc(canvasWidth / 2, canvasHeight / 2, radius_int, 0, 2 * Math.PI);
    myCanvas.stroke();

}
function clearCanvas() {
    const myCanvas = document.getElementById("myCanvas");
    const context = myCanvas.getContext('2d');
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);

}

function drawCircles() {
    const myCanvas = document.getElementById("myCanvas");
    const canvasWidth = myCanvas.width;
    const canvasHeight = myCanvas.height;

    const context = myCanvas.getContext('2d');

    let inx = 0;
    let counter = setInterval(() => {
        inx++;
        if (inx > canvasHeight / 2) {
            clearInterval(counter);
        }
        context.beginPath();
        context.strokeStyle = "blue";
        context.arc(canvasWidth / 2, canvasHeight / 2, inx, 0, 2 * Math.PI);
        context.stroke();
    }, 10);

}


drawCircles();