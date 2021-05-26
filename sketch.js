//Universal variables
var GameState = "Play";
var life = 3;
var score = 0;
var bg;

//Level 1 variables
var EnemySpaceship1, EnemySpaceship1Img;
var Player, PlayerImg;
var bullet1, bullet2, bulletsImg;
var Missiles, MissilesImg;
var EnemySpaceship1Grp, MissilesGrp, BulletsGrp;


function preload(){
    
}
function setup(){
    createCanvas(displayWidth-40, displayHeight-30);

    //The player Sprite and spaceship we'll add Image afterwards
    player = createSprite(width/2, height-50, 70, 70);
    player.shapeColor = "red";

    //Creating Groups For level1 variables
    EnemySpaceship1Grp = new Group();
    MissilesGrp = new Group();
    BulletsGrp = new Group();

    
}

function draw(){
    background(0);

    if(GameState === "Play")
    {
        
        if(frameCount % 150 === 0)
        {
            SpawnSpaceships1();
        }
        
        drawSprites();
    }

}

function SpawnBullets()
{
    bullet1 = createSprite(player.x - 35, player.y, 10, 10);
    bullet1.shapeColor = "yellow";
    BulletsGrp.add(bullet1);

    bullet2 = createSprite(player.x + 35, player.y, 10,10);
    bullet2.shapeColor = "yellow";
    BulletsGrp.add(bullet2);

    BulletsGrp.setVelocityYEach(-1.5);
    BulletsGrp.setLifetimeEach(400);

}
function SpawnSpaceships1()
{
    var b = 50;
    for(var a = 0; a <= 7; a++)
    {
                
        EnemySpaceship1 = createSprite(b, 50, 75, 75);
        b += 150;
        EnemySpaceship1.shapeColor = "blue";
        //EnemySpaceship1.scale
        EnemySpaceship1Grp.add(EnemySpaceship1);
        
    }
    EnemySpaceship1Grp.setVelocityYEach(2);
    EnemySpaceship1Grp.setLifetimeEach(350);
}

function keyPressed()
{
    //console.log("hi");
    if(GameState === "Play" && keyCode === 32)
    {
        
        SpawnBullets();
    }
}