// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/


var engine , world;
var cannon ,tank , ground ;


function setup() {
    createCanvas(1200 , 400);
    engine = Engine.create();
    world = engine.world;
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    
    
    cannon = new ShootBall(120 , 360 , 70 , 20 , PI , 50 , 360);
    tank = new Tanker(50 , 360 , 100 , 10);
    ground = new Ground(width/2 , height-10 , width , 20);
    

}

function draw() {
    background(0);
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
cannon.display();
tank.display();
ground.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}