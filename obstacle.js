class Obstacle{
    constructor(x){
        this.s = -20;
        this.yPos = height;
        this.x = x;
        this.xPos = width + this.x;
        this.toLeft = 5;
        this.yRandom = -30;
    }
    show(){
      fill(0, 255, 0);  
      rect( this.xPos, this.yPos, 20 , this.s);
    }
    move(){
        this.xPos -= this.toLeft;
        if(this.xPos < 0){
            this.xPos = width + this.x;
            this.s += random(this.yRandom);
            if(this.s <= -50){
                this.s = -25;
            }
        }
    }
}
