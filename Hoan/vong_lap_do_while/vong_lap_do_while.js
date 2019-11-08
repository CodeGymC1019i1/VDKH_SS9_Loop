// Sử dụng vòng lặp do while để viết lại chương trình yêu cầu nhập các số từ 1 -> 10
// ở ví dụ trong phần vòng lặp while.

//B1: tạo ô nhập để kiểm tra điều kiện....
// let number;
//
// do {
//   number = prompt("Nhap cac so tu 1 den 10");
// } while (number < 1 || number > 10);

// alert("So ban vua nhap la" + number);
//nếu false => chạy lại câu lệnh nhập vào số n
//nếu true => thoát khỏi câu lệnh và in ra trình giá trị đó...

//BÀI 02: TẠO BẢNG BẰNG 2 VÒNG LẶP FOR
// tạo ra 10 dòng
// let html = "";
// for (var i = 1; i <= 10; i++) {
//   html += '<tr>';
//     for (var j = 1; j <= 10; j++) {
//       html += '<td>'+ i * j +'</td>';
//     }
//   html += '</tr>';
// }

// console.log(html);
// var tableElement = document.getElementById('table');
// tableElement.innerHTML = html;


//BÀI 03: TẠO BẢNG BẰNG VÒNG LẶP WHILE....;
let i = 1;
let j = 1;
let html = "";

while (i <= 10) {
  html += '<tr>';
    while (j <= 10) {
      html += '<td>'+ i * j +'</td>';
      j++;
    }
  html += '</tr>';
  j = 1;
  i++;
}

var tableElement = document.getElementById('table');
tableElement.innerHTML = html;
