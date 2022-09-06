// let numbers:number[]=[1,2,3,4,5,6]
// numbers[3] = 7;
// console.log(numbers);
//object//
// const arr_names: number[]= new Array(4)
// for (let i = 0;i<arr_names.length;i++){
//     arr_names[i] = i*2;
//     console.log(arr_names[i]);
// }
// Duyệt mảng//
// const nums : number[] = [101,102,103,104,105]
// for(let j in nums){
//     console.log(nums[j])
// }
//Readonly với tham chiếu//
interface Person{
    name: string;
    age: number;
}
interface ReadonlyPerson{
    readonly name:string;
    readonly age:number
}
let writablePerson:Person = {
    name: 'Person McPersonface',
    age: 34,
};
let readonlyPerson:ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);