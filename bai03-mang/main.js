/*
array là một dạng đặc biệt của object
được thiết kế để lưu các giá trị theo thứ tự và truy cập bằng chỉ số(index),
bắt đầu từ 0
*/
//1. Tạo mảng: Mảng được tạo bằng cặp ngoặc vuông []
//(Ngoài ra còn có cách tọa bằng constructor)

//Cách 1: Khai báo mảng
let arr1 = []
console.log(arr1);

let arr2 = [1, 2, "three", true, null, undefined];
console.log(arr2);

//Cách 2: Sử dụng Array và constructor
let arr3 = new Array();
console.log(arr3);

let arr4 = new Array(1, 2, "three", true, null, undefined);
console.log(arr4);

let arr5 = new Array(5); // Tạo mảng có độ dài 5, nhưng không có giá trị
console.log(arr5); // [ <5 empty items> ]


const traiCay = ["Cam", "Quyt", "Oi"]
console.log(typeof traiCay);
console.log(traiCay[0]);
console.log(traiCay[1]);
console.log(traiCay[2]);


//2. Mảng lồng nhau và kiểu dữ liệu trong mảng
//Mảng có thể chưa bất kỳ loại kiểu dữ liệu nào , bao gồm chuỗi, số đối tượng,... hoặc thậm chí là mảng khác
const mang1 = [1, 2, "Chuoi", undefined, null, true, [3, 4, 5]]
console.log(mang1[6][1]);
console.log(mang1[6][2]);

traiCay.push([1, 2, 3])
console.log(traiCay);

//3. map(): (map sẽ duyệt qua từng phần tử của mảng) tạo mảng mới từ mảng cũ
const so = [1, 2, 3, 4, 5];
console.log(so.map((item) => item * 2));

//biến đổi phẩn tử của mảng thành đối tượng mới
const so1 = so.map((item) => ({so:item}))
console.log(so1);

//4. find index
const timTraiCay = traiCay.findIndex((item) => {
    return item === "Oi"
});
console.log(timTraiCay);

const traiCay1 = traiCay.map((traiCay) => (traiCay + "!"))
console.log(traiCay1);

//
