var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["597df677-be82-42f3-a836-e6c7d17f4d62"],"propsByKey":{"597df677-be82-42f3-a836-e6c7d17f4d62":{"name":"ball1","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="orange";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="yellow";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="green"
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="orange";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="yellow";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="green";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="orange";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="yellow";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="green";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="purple";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="orange";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="green";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="purple";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="orange";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="green";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red"













paddle=createSprite(200,390,100,20)
ball=createSprite(200,200,20,20)

function draw() {
  background("white");
  text("score "+score,300 ,20)
 if(keyDown("ENTER")){
 ball.velocityX=4
 ball.velocityY=3
 
 
 }
paddle.x=World.mouseX
edges= createEdgeSprites()
ball.bounceOff(paddle)
ball.bounceOff(topEdge)
ball.bounceOff(leftEdge)
ball.setAnimation("ball1");
ball.scale=0.08

ball.bounceOff(rightEdge)

if(ball.isTouching(box1)){
  box1.destroy()
score=score+1
  
}
if(ball.isTouching(box2)){
  box2.destroy()
score=score+1}
if(ball.isTouching(box3)){
  box3.destroy()
score=score+1}
if(ball.isTouching(box4)){
  box4.destroy()
score=score+1}
if(ball.isTouching(box5)){
  box5.destroy()
score=score+1}
if(ball.isTouching(box6)){
  box6.destroy()
score=score+1}
if(ball.isTouching(box7)){
  box7.destroy()
score=score+1}
if(ball.isTouching(box8)){
  box8.destroy()
score=score+1}
if(ball.isTouching(box9)){
  box9.destroy()
score=score+1}
if(ball.isTouching(box10)){
  box10.destroy()
score=score+1}
if(ball.isTouching(box11)){
  box11.destroy()
score=score+1}
if(ball.isTouching(box12)){
  box12.destroy()
score=score+1}
if(ball.isTouching(box13)){
  box13.destroy()
score=score+1}
if(ball.isTouching(box14)){
  box14.destroy()
score=score+1}
if(ball.isTouching(box15)){
  box15.destroy()
score=score+1}
if(ball.isTouching(box16)){
  box16.destroy()
score=score+1}

  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
