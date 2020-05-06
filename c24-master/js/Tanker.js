class Tanker {
  constructor(x, y, diameter, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.circle(x , y , diameter);
     
     this.diameter = diameter;
     this.height = height;
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position;
      rectMode(CENTER);
      fill( 255);
      circle(pos.x , pos.y , this.diameter);
      rect(pos.x , pos.y+(this.height/2) , this.diameter , this.height);
      rect(pos.x , pos.y+(3*this.height/2) , this.diameter , this.height);

    };
}
