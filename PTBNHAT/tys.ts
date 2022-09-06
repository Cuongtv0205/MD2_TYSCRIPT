class PTBN {
    private _a: number;
    private _b: number;

    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }

    public root(): string {

        if (this._a==0){
            if(this._b==0){
                return 'PTSVN';
            }else {
                return 'PTVN'
            }
        }else {
            let nghiem = -this._b/this._a;
            return nghiem.toString();
        }
    }
}
let kq = new PTBN(2,3);
console.log(kq.root())