video="";
object_detector="";
status="";
function preLoad(){
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center()

}
function draw(){
    image(video,0,0,480,380);

}
function startFunction(){
    object_detector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("objectStatus").innerHTML="Status : Detecting Object ";
}
function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}