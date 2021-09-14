class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
           
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        this.x=x;
        this.y=y;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0);
        rect(0,0, this.width, this.height);
       pop();
    }
}