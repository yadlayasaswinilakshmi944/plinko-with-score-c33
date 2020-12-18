class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        text("1000",1,640);
        text("900",95,640);
        text("800",175,640);
        text("700",255,640);
        text("600",335,640);
        text("500",415,640);
        text("400",495,640);
        text("300",575,640);
        text("200",655,640);
        text("100",735,640);
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};