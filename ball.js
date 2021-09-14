class Ball1 {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'density': 1.2,
            'friction': 0
        }
        this.body = Bodies.circle(260,100,radius/2, options);
        this.radius = radius;
        World.add(world,this.body); 
    
    }
    
    display() {
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}


