img = "";
objeects = []
status = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video=createCapture(VIDEO);
    objectDector = ml5.objectDector('cocossd', modelLoaded);
    document.getElementById("satus").innerHTML = "estado: detectado objectos";
}

function moddelLoaded() {
    console.log("¡modelo cargado!")
    status = true;KO
    abjectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.timeLog
    }
}



function draw() {
    image(video, 0, 0, 380,380);

    if(status !="")
    {
       r= random(255)
       g= random(255) 
       b= random(255)

        objectDector.detec(video, gotResult);
        for (i = 0; i < object.length; i++) {
        document.getElementById("satus").innerHTML = "estado: objeto detectado";
        document.getElementById("number_of_objects").innerHTML = "numero de objectos detectados"+object.length;
    fill("#FF0000");
    peercent = floor(objects [i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15,objects[i].y + 15);
    noFill();
    stroke(r,g,b);
    rect(object[i].x, objects[i].y, objects[i].height);
      }
     } 
}