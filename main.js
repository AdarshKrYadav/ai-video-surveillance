video="";
status="";
object=[];
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center()

}
function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        object_detector.detect(video,gotresult);
        for(var i=0;i<object.length;i++){
            document.getElementById("objectStatus").innerHTML="Status : Objects Detected";
            document.getElementById("objectsDetected").innerHTML="Number of objects detected are : "+objects.length;
            stroke("#0F9D58");
            fill("#0F9D58");
          var percent=floor(object[i].confidence*100); 
          text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
          noFill();
          rect(object[i].x, object[i].y , object[i].width, object[i].height); 
        }
    }
}
function startFunction(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("objectStatus").innerHTML="Status : Detecting Object ";
}
function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }  
    else{
        console.log(result);
        object=result;
    }
}