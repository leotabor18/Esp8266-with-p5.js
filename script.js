let robot;
let obstacle;
let bgImage;
let char;
let obs = new Array();
let index = 0;
let chck = 1;
let socket;
function setup(){
    createCanvas(500, 300);
    robot = new Robot();
    for(let i = 0; i < 2; i++){
        let xPos = floor(random(1));
        if(xPos == chck){
            obstacle = new Obstacle(xPos*200);
            obs.push(obstacle);
            chck++;
        }else{
            obstacle = new Obstacle(xPos);
            obs.push(obstacle);
        }
    }
    bgImage = loadImage('bg.jpg');
    socket = io.connect('http://localhost:3000');
    socket.on('result', jumpInit);
}
function jumpInit(data){
    console.log(data);
    let jump = data.data;
    if(jump == "true"){
        robot.yJump();
    }
}
function keyPressed(){
    if(keyIsPressed){
        robot.yJump();
        }
}
function draw(){
    image(bgImage, 0, -190);
    obs.forEach(x => {
        x.show();
        x.move();
        console.log(x);
        if(robot.collide(x)){
            textSize(23);
            fill(255, 15, 120);
            text('Game over', 200, 105);
            console.log('Game over');
            noLoop();
        }
    });   
    robot.display();
    robot.pull(); 
    if(index == 3){
        index = 0;
    }   
}