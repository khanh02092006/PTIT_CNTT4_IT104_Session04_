function displayPersonEmploeeInfo(thongtin) {
    console.log(` nhân viên có tên là ${thongtin.name}, tuổi ${thongtin.age}, mã nhân viên là ${thongtin.employeeId}, làm việc tại phòng ban ${thongtin.department}`);
}
const staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
displayPersonEmploeeInfo(staff1);
