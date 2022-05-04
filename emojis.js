class Emoji{
  constructor(x,y,size,emoji){
    this.x = x;
    this.y = y;
    this. size = size;
    this.emoji = emoji;
    this.speed = 2.5;
  }
  
  show(){
    textSize(this.size);
    text(this.emoji,this.x,this.y);
  }
  
  move(){
    let choice = floor(random(4));//0,1,2,3
    if(choice == 0)this.x++;
    else if(choice == 1)this.x--;
    else if(choice == 2)this.y++;
    else this.y--;
  }
  
}