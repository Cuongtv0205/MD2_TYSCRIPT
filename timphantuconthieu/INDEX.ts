let numbers:number[] = [0,2,3,5,7,8,9,10]
let i:number = 0;
let number2: number[] = [];
while (i<=10){
    let a:number = numbers.indexOf(i)
    if(i==-1){
        number2.push(i)
    }
    i++;
}
console.log(number2);