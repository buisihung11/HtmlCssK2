// FORM VALIDATION
// Lay form theo thuoc tinh name cua the form
let myForm = document.forms["cart-form"];
console.log(`myForm`, myForm);

// thuoc tinh onsubmit can tra ve boolean
// true thi form se duoc submit
// false thi nguoc lai

function handleSubmit(e) {
  console.log("Form");
  let isFormValid = true;
  let errStr = "";
  // kiem tra cac thuoc tinh cua form

  // C1: Lay ra o input
  //   let firstNameInput = document.getElementById("form6Example1");
  // C2: document.querySelector('input[name="firstName"]');
  //   console.log("Noi dung cua o input", firstNameInput.value);

  // C2:
  //   console.log("NOI DUNG: ", myForm["firstName"].value);
  // Kiem tra xem first name,
  // last name co duoc nhap hay chua
  let firstNameTxt = myForm["firstName"].value;
  let lastNameTxt = document.getElementById("form6Example2").value;
  if (firstNameTxt == "" || lastNameTxt == "") {
    isFormValid = false;
    errStr = "Vui long nhap firstname va lastname";
  }

  // Kiem tra chieu dai cua n co > 6 hay khong
  if (firstNameTxt.length < 6 || lastNameTxt.length < 6) {
    isFormValid = false;
    errStr = "Chieu dai cua firstName va lastName phai lon hon 6";
  }
  let emailTxt = myForm["email"].value;
  // Kiem tra o nhap email co dung hay khong
  if (!emailTxt.includes("@")) {
    isFormValid = false;
    errStr = "Email khong hop le";
  }

  if (!isFormValid) {
    document.getElementById("errMsg").innerText = errStr;
    return false;
  }
  // ngan cho form khong submit
  //   e.preventDefault();
  alert("Form valid");
  return isFormValid;
}

document.getElementById("btn-mockup").addEventListener("click", function () {
  myForm["description"].value = "Gia tri mac dinh";
});

// EXCERCISE 1:
// CHECK XEM PHONE NHAP VAO CO DUNG LA SDT HAY KHON
// 10 so va phai la so (Bat dau bang so 0)

// EXCERCISE 2:
// TAO MOT CHECKBOX CAC SO THICH
// KIEM TRA PHAI CO IT NHAT 2 SO THICH
