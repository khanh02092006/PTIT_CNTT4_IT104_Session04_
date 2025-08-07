function gioitheisinhvien(sv) {
    return `Tên tôi là  ${sv.name}, Tôi ${sv.age} tuổi , Email của tôi là: ${sv.email}`;
}
const sinhVien1 = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
console.log(gioitheisinhvien(sinhVien1));
