enum Gender {
    Male,
    Female,
    Other

}
class Students {
    fullname: string = ''
    gender: Gender = Gender.Other
    birthday?:Date;
    email: string = '';
    phone:string = ''

    constructor(fullname: string, gender: Gender,birthday: Date, email: string, phone: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
}
let listStudents: Students[]=[];
listStudents.push(new Students('Nguyễn Văn Anh',Gender.Male,
    new Date('1990-09-09'),'vananh@gmail.com','0987655655'));
listStudents.push(new Students('Nguyễn Anh Anh',Gender.Female,
    new Date('2000-08-09'),'anhanh@gmail.com','0987666666'));
listStudents.push(new Students('Trần Thị Hoa',Gender.Other,
    new Date('2002-06-02'),'hoatran@gmail.com','0987777777'));
function showListStudents(students:Students){
    console.log(`Tên: ${students.fullname} Giới Tính: ${students.gender} Ngày sinh: ${students.birthday} 
    Email: ${students.email} SĐT: ${students.phone}`)
}
listStudents.forEach(showListStudents);

