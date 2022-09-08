import {Staff} from "./main";
import {EmployeeManager} from "./quanli";
import {Role} from "./Role";

function main(){
    // tạo các nhân viên
    let staff:Staff= new Staff(1,'Hoàng Gia','20/10/2000','Hà Nội',Role.ceo);
    let staff1:Staff= new Staff(2,'Nhật Minh','10/10/2002','Hải Phòng',Role.sale)
    let staff2:Staff= new Staff(3,'Minh Quân','1/06/1999','Thanh Hóa',Role.sale)

    EmployeeManager.add(staff);
    EmployeeManager.add(staff1);
    EmployeeManager.add(staff2);
    console.log(EmployeeManager.show()); // hiển thị danh sách nhân viên
    EmployeeManager.delete(1); // Xóa theo id
    // EmployeeManager.deleteByFilter(1) // hoặc dùng filter
    console.log('--Sau Xóa--');
    console.log(EmployeeManager.show());
    console.log('--Sau sửa--');
    EmployeeManager.edit(3,'Gia Bảo');// Sửa thông tin nhân viên//
    console.log(EmployeeManager.show());
}
main();