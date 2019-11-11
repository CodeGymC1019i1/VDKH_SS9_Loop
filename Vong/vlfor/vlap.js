//BÀI TOÁN 01
// Viết chương trình nhận vào một số từ hộp thoại,
// việc nhập kết thúc khi người dùng nhập vào giá trị -1.
// Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện
// tính tổng các giá trị đó.
total = 0;
let n = prompt('Nhập');
n = Number(n);

while (n != -1) {
  alert(n);
  total += n;
  n = prompt('Nhập tính tổng');
  n = Number(n);
}

// console.log(total);
// in ra kết quả lên trình duyệt...
document.write("Kết quả của phép toán là: " + total);


//BAI TAP VE TAM GIAC
let i = 1;

while (i < 30) {
    document.write("<hr width = " + i + "%>");
    i++;
}
