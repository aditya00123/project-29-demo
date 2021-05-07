class Polygon {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 30;

        var options = {
            restitution:0.2,
            friction:0.5,
            density:1.2,
        }

        this.image = loadImage('polygon.png');

       this.polygon = Bodies.circle(this.x,this.y,this.radius,options);
       World.add(world,this.polygon);

       

    }

    display() {
    push();
    translate(this.polygon.position.x,this.polygon.position.y);
    rotate(this.polygon.angle);
    imageMode(CENTER);
    image(this.image,0,0,60,60);
    pop()
    }
}