interface person {
    name: string;
    age: number;
}
interface emploee {
    employeeId: string;
    department: string;
}
type personEmploee = person & emploee;
function displayPersonEmploeeInfo(thongtin: personEmploee): void {
    console.log(` nhân viên có tên là ${thongtin.name}, tuổi ${thongtin.age}, mã nhân viên là ${thongtin.employeeId}, làm việc tại phòng ban ${thongtin.department}`);
}
const staff1: personEmploee = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};

displayPersonEmploeeInfo(staff1);
