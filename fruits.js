img="";
Status="";
objects=[]
function preload(){

img=loadImage("basket.png");


}

function setup(){
canvas=createCanvas(750,400);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Objects are being detected";
}


function modelLoaded(){

objectDetector.detect(img,gotResults);
console.log("Model Loaded");
Status=true;
}

function gotResults(error,results){
if(error){console.log(error)};
if(results){
    console.log(results);
    results=objects;





}


}

function draw(){
    image(img,0,0,750,100);
    if(Status!=""){
objectDetector.detect(img,gotResults);
    for(i=0;i<objects.length;i++){
        r=random(255);
        g=random(255);
        b=random(255);

        document.getElementById("status").innerHTML = "Objects are detected";
        document.getElementById("obj_detected").innerHTML = "Number of objects detected are - "+ objects.length;
        fill(r,g,b);
        stroke(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+percent+"%",objects[i].x+55,objects[i].y+55);
        noFill();
        rect(objects[i].x+55,objects[i].y+55,objects[i].width,objects[i].height);
        
    }

    }
}

