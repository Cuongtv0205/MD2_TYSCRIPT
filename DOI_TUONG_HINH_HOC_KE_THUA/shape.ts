export class Shape{
  private _color: string;
  private _filled: boolean;

   constructor(color: string, filled: boolean) {
     this._color = color;
     this._filled = filled;
   }

   getColor(): string {
     return this._color;
   }

   setColor(value: string) {
     this._color = value;
   }

   getFilled(): boolean {
     return this._filled;
   }

   setFilled(value: boolean) {
     this._filled = value;
   }
   public toString():string {
       return `Hình dạng màu sắc ${this.getColor()} and ${this.getFilled()}`
   }
 }