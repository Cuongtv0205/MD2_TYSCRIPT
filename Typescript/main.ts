class Dongvat{
    private _mau: string;
    private _tuoi: number;
    private _cannang: number;
    constructor(mau:string,tuoi:number,cannang:number) {
        this._mau = mau;
        this._tuoi = tuoi;
        this._cannang = cannang;

    }
    public an():string{
        return 'Đang ăn'
    }

    get mau(): string {
        return this._mau;
    }

    set mau(value: string) {
        this._mau = value;
    }

    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get cannang(): number {
        return this._cannang;
    }

    set cannang(value: number) {
        this._cannang = value;
    }
}
let  DongVat = new Dongvat('den',2,20)
DongVat.an();
