/*Obeject là gì ?
Object là trong JS được sử dụng để nhóm các giá trị lại với nhau
Chúng cho phep tổ chức dữ liệu dưới dạng các cặp key-value
trong đó key là tên thuộc tính và valuue là giá trị tương ứng
*/
const use = {
    //atributes
    name: "Tu",
    age: "21",
    "gioi tinh": "male",

    //method
    xinchao() {
        console.log("Xin Chao")
        console.log(this.name);
        return 1;
    },
};
console.log(use);

console.log(use.name);
console.log(use.age);
use.xinchao();
console.log(use["gioi tinh"]);

//class 
class User {
    constructor(name, age) {
        this.ten = name;
        this.tuoi = age;
    }

    //method
    xinchao() {
        console.log("Xin Chao")
        console.log(this.name);
        return 1;
    }
}

const user1 = new User("Tu", 21);
console.log(user1.ten);