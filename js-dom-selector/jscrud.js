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
let leftBtn = document.getElementById("addLeftButton");
// => null
console.log(leftBtn);
// leftBtn.addEventListener('click', function () {
//     console.log('Da bam');
// })
// leftBtn.addEventListener('click', sayMyName);

// leftBtn.addEventListener("click", function () {
//   sayMyName("Hung Bui");
// });

// C3 Thay doi thuoc tinh onClick cua the do
// Se co nhung cai nhuoc diem

// leftBtn.onclick = function () {
//   console.log("Hello World");
// };

// 1. Chinh background cho the div#left, div#right

// cot_trai.style.backgroundColor = "grey";
// cot_trai.style.padding = "20px";

// cot_phai.style.backgroundColor = "pink";
// cot_phai.style.padding = "15px";

//2 . Thay doi mau cua tat ca nhung class la btn thanh mau den chu trang
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
  var btn = buttons[i];
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
}

// In ra noi dung cua title h1
// Them the a thuoc tinh href=google.com vao trong title h1
// Thay doi noi dung cua title h1 Thanh 'Hello World'
// In ra noi dung cua the #left-well (innerText)

console.log("Bat dau");

let leftWellDiv = document.getElementById("left-well");
let addLeftBtn = document.querySelector("#addLeftButton");
console.log(`addLeftBtn`, addLeftBtn);

addLeftBtn.onclick = function () {
  //them 1 the button vao trong cot div#leftwell
  // tao the button moi de them vao trong
  // cot left well

  // let btn = `<button style="color: pink;">Nut moi them</button>`;
  //   console.log("Da click");
  // leftWellDiv.innerHTML = leftWellDiv.innerHTML + btn;

  let btn = document.createElement("button");
  btn.className = "btn btn-default target";
  btn.innerText = "Nut moi them";
  btn.style.color = "pink";

  btn.onclick = function () {
    btn.parentNode.removeChild(btn);
  };

  leftWellDiv.appendChild(btn);
};

let rightWellDiv = document.getElementById("right-well");
const rightBtn = document.getElementById("addRightButton");

// param cuoi cung

rightBtn.addEventListener("click", function () {
  // xoa node cuoi cung cua the right-well

  // lay duoc mang cac object btn trong the div#right-well
  let arrBtn = document.querySelectorAll(
    '#right-well button[class="btn btn-default target"]'
  );

  let lastBtn = arrBtn[arrBtn.length - 1];

  console.log(`lastBtn`, lastBtn);

  // xoa nut cuoi cung
  rightWellDiv.removeChild(lastBtn);
});

let arrBtn = document.querySelectorAll(
  'button[class="btn btn-default target"]'
);

let wellContainer = document.getElementById("well-container");

arrBtn.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener("click", function () {
    // console.log(btn.innerText);
    btn.parentNode.removeChild(btn);
    // console.log();
  });
});

// UPDATE

// STATE, DATA

let myQuantity = 0;

let quantitySpan = document.getElementById("quantity");

quantitySpan.innerText = myQuantity;

document.getElementById("minusOne").addEventListener("click", function () {
  myQuantity--;
  console.log(`myQuantity`, myQuantity);
  quantitySpan.innerText = myQuantity;
});
document.getElementById("plusOne").addEventListener("click", function () {
  myQuantity++;
  console.log(`myQuantity`, myQuantity);
  quantitySpan.innerText = myQuantity;
});

// EXCERCISE

// EX1: Tao hai o input va mot btn
// click btn thi in ra ket qua cong cua hai o input

// EX2: CHANGE MY COLOR
// div hinh vuong co mau ban dau la mau vang
// co them cai nut de khi click vao thi thay doi mau cua cai div o tren (mau o dau tu kiem)

// EX3: Co 1 o input va mot the list cac danh sach can di cho
// Nhap noi dung can them vao va bam nut add thi se them noi dung do vao
// trong list o tren

// function addLeftButton() {
//   // 1. Tao mot element button
//   var leftBtn = document.createElement("button");
//   leftBtn.innerHTML = "Button trai" + leftCount++;
//   leftBtn.className = "btn";
//   // 2. Add vao trong cot ben trai
//   cot_trai.appendChild(leftBtn);
// }
