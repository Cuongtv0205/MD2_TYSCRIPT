class Staff{
    private _name:string;
    private _email:string;
    private _age:number;

    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }
}
let staff = new Staff('Phan Anh Đức','anhduc10@gmail.com',30);
console.log(staff);

let nameStaff = staff.getName()

console.log(nameStaff)

staff.setName('lưu Văn Vũ')

let currentNameStaff = staff.getName()

console.log(currentNameStaff)
// đặt lại email nhân viên//
let emailStaff = staff.getEmail()
console.log(emailStaff);
staff.setEmail('vanvu10@gmail.com');
let currentEmailStaff = staff.getEmail()
console.log(currentEmailStaff);
// đặt lại tuổi nhân viên//
 let ageStaff = staff.getAge()
console.log(ageStaff);
 staff.setAge(40);
 let currentAgeStaff = staff.getAge()
console.log(currentAgeStaff);
