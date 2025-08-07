let diemso: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let tong: number = 0;
for (let i = 0; i < diemso.length; i++) {
    tong += diemso[i];
}
let diemtrungbinh: number = tong / diemso.length;
console.log("Điểm trung bình của sinh viên là: " + diemtrungbinh.toFixed(2));
