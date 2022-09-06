class Fan {
    private _slow : number = 1;
    private _medium: number = 2;
    private _fast: number = 5
    private _speed:number;
    private _on:boolean ;
    private _radius: number ;
    private _color: string ;
    constructor(slow:number,medium:number,fast:number,_speed:number,_radius:number,_color:string) {
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
