class ShootBall{
    constructor(x , y , width , height , angle , rX , rY){
        var options = {
            angle:angle,
           isStatic:true
           
        }
        this.body = Bodies.rectangle(x , y , width , height , options);
        
        this.angle = angle;
        this.width = width;
        this.height = height;
        this.rx = rX;
        this.ry = rY


    }

    //attach(body){}

    shoot(){

    }

    display(){
        this.shoot();
        var pos = this.body.position;
        
        if(keyCode == RIGHT_ARROW){
            if(this.angle<PI){
                this.angle = this.angle+0.1;
            }
            
            keyCode = null;
        }
        else if(keyCode == LEFT_ARROW){
            if(this.angle>PI/2){
                this.angle = this.angle-0.1;
            }
            
            keyCode = null;
        }
        
        push();
        rectMode(CENTER);
        fill(255);
        translate(this.rx , this.ry);
        
        
        rotate(this.angle);
        
        rect(this.rx - pos.x ,this.ry - pos.y , this.width , this.height);
        pop();
        
        
    }

}
