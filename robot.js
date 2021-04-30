class Robot{
    constructor(){
        this.size = 25,
        this.xPosition = 40;
        this.yPosition = height - this.size;
        this.yMove = 0;  
        this.xMove = 0;
        this.newPos = 0;
    }
    collide(obs){
       return collideRectRect(this.xPosition, this.yPosition , this.size, this.size, obs.xPos, obs.yPos,  35, obs.s);
       
    }
    display(){
        fill(255 ,225 ,32); 
      rect(this.xPosition, this.yPosition , this.size, this.size);   
    }
    yJump(){
        if(this.yPosition >= 275){
            this.yMove = - 15;
            }
        }
    pull(){
        this.yPosition += this.yMove;
        this.yMove += 1;
        this.yPosition = constrain(this.yPosition, 150 , height - this.size);
    }   
}
