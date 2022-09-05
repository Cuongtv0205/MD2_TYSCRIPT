class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    distance(b){
        let dx = this.x - b.x;
        let dy = this.y - b.y;

        return Math.hypot(dx,dy)
    }
}
let p1 = new Point(10,10);
let p2 = new Point(20,20);

console.log(p1.distance(p2))