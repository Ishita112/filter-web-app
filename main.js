function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function draw() {
    image(video, 0, 0, 300, 300);

}

function take_snapshot(){
    save('myFilterImage.png');
}