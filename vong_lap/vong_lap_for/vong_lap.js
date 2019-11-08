/*
//Sử dụng vòng lặp for
// Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
let text = "";
for (var i = 0; i < 5; i++) {
   text += "The number is: " + i + "<br />";
}
// console.log(text);
let demoElement = document.getElementById("demo");
demoElement.innerHTML = text;


//Tính tổng dùng vòng lặp for
let total = 0;
let n = Number(prompt('Input n..'));
// console.log(n);
// console.log(typeof n);

for(let i = 1; i <= n; i++) {
  // console.log(i);
  let number = Number(prompt('Enter number..' + i));
  total += number;
}

alert(total);
*/

//Bai02 - Xây dựng tam giác bằng vòng lặp for

  //B1: Nhập giá trị của n qua ô prompt...
  var n = prompt('Nhap gia tri cho n...');
  n = Number(n);

  //B2: Xác định độ cao của tam giác...
  for (var i = 1; i <= n; i++) {
    // document.write(i);
    // document.write('<br />');

    //tạo từng hàng với chỉ số là j bằng n (*)
    for (var j = 1; j <= i; j++) {
      document.write(' * ');
    }
    document.write("<br >");
  }
