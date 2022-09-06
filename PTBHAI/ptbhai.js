class QuadraticEquation {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

    }

    getA() {
        return this.a
    }

    getB() {
        return this.b
    }

    getC() {
        return this.c
    }

    getDiscriminant() {
        var delta = (this.b * this.b - 4 * this.a * this.c)
        return delta;
    }
    getRoot1(){
       let x1 = ((-this.b)+Math.pow(this.getDiscriminant(),0.5)/ 2*this.a)
        return x1;
    }
    getRoot2(){
        let x2 = ((-this.b)-Math.pow(this.getDiscriminant(),0.5)/2*this.a)
        return x2;
    }
    getRoot(){
        let x = (-this.b)/2*this.a
        return x;
    }
    get(){
        if (this.getDiscriminant()==0){
            console.log('Phương trình có nghiệm kép là :'+ this.getRoot())
        }else if(this.getDiscriminant()<0){
            console.log('Phương trình vô nghiệm');
        }else {
            console.log('Phương trình có nghiệm x1 là:' + this.getRoot1() + 'Nghiệm x2 là:' + this.getRoot2())
        }
    }
}
let qua = new QuadraticEquation(-4,6,2)
qua.get()