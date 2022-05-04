var w1;
var w2;
var emoji=[];
var emojis = ["😎","😗","🤯","👻","😈","🤠","🤢","🎃","😺","👺"];

function setup() {
  createCanvas(400, 400);
  background(220);

  //create the emoji array to hold the emoji object
  for(let i = 0; i < emojis.length;i++){
    emoji[i] = new Emoji(random(width),random(height),random(10,50),emojis[i]);
  }
}

function draw() {
  background(255,194,32);
  for(let i = 0; i < emoji.length;i++){
    emoji[i].show();
    emoji[i].move();
  }
}