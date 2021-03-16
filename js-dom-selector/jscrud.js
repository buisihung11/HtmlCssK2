// Luu y thu tu import file JS

// Co hai cach de them su kien cho 1 the
// C1: 
// them vao thuoc tinh cua the do o file HTML

// khi click vao cac element nay thi cac ham khai bao 
// trong su kien (event) se duoc goi

// LUu y phai truyen dau () sau ten ham VD: themvaogiohang()


function sayMyName(name) {
    console.log(name);
}

// C2: Thong qua Object cua the (Element) do, minh se
// khai bao method onClick cho the do

// Thong qua addEventLisetener 
// Param1 => Ten su kien muon 'lang nghe' (su kien muon bat)
// Param2 => 1 function (callback) de goi ra khi su kien
// xuat hien
let leftBtn = document.getElementById('addLeftButton');
// => null
console.log(leftBtn);
// leftBtn.addEventListener('click', function () {
//     console.log('Da bam');
// })
// leftBtn.addEventListener('click', sayMyName);

leftBtn.addEventListener('click', function () {
    sayMyName('Hung Bui');
});

// C3 Thay doi thuoc tinh onClick cua the do
// Se co nhung cai nhuoc diem 

leftBtn.onclick = function () {
    console.log('Hello World')
}

// In ra noi dung cua title h1
// Them the a thuoc tinh href=google.com vao trong title h1
// Thay doi noi dung cua title h1 Thanh 'Hello World'
// In ra noi dung cua the #left-well (innerText)