class Fan {
    private _slow : number = 1;
    private _medium: number = 2;
    private _fast: number = 5
    private _speed:number;
    private _on:boolean ;
    private _radius: number ;
    private _color: string ;
    constructor(slow:number,_speed:number,_radius:number,_color:string) {
        this._slow = slow;
        this._speed = _speed;
        this._radius = _radius;
        this._color = _color;
    }
    toString():string{
        if (this._on == false) {
            return this._color + ' '+ this._radius;
        }
        else {
            return 'fan is on';
        }
    }
}
let Fan1 = new Fan(1,5,10,'blue')
console.log(Fan1.toString())
let Fan2 = new Fan(1,10, 20,'blue')
console.log(Fan2.toString())