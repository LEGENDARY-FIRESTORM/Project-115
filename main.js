function preload() {
}
  
function setup() {
    canvas = createCanvas(400, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}
  
function draw() {
    image(video, 0, 0, 400, 325)
}

function take_snapshot(){
    save('myFliteredImage.png')
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}