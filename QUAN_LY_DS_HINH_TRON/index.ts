class Circle{
    color:string = 'black';
    radius:number = 20;
    constructor(color:string,radius:number) {
        this.color = color;
        this.radius = radius;
    }
}
let circleList : Circle[]= [];
circleList.push(new Circle('red',15));
circleList.push(new Circle('green',25));
circleList.push(new Circle('blue',30));
function showCircle(circle:Circle){
    console.log('Hình tròn màu: ' + ' ' + circle.color + ' ' + 'bán kính:' + ' ' + circle.radius)
}
circleList.forEach(showCircle);// hàm ForEach hiển thị tất cả các phần tử trong mảng//
