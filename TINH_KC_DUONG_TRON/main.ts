export class Circle{
    public radius:number;
    constructor(radius:number) {
        this.radius=radius
    }
}
function distance(circleOne:Circle,circleTow:Circle,d:number){
    let distance = Math.pow(circleOne.radius - circleTow.radius,2)+Math.pow(d,2);
    return Math.sqrt(distance);
}
let circle1 = new Circle(10);
let circle2 = new Circle(7)
console.log(distance(circle1,circle2,24));