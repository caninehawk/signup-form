const first = document.querySelector("#first-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#phone");
let error = document.querySelector(".message");
let items = [first,email,password,phone]
items.forEach((item)=>{
    item.addEventListener("focusin",()=>{
        error.textContent = "";
        item.classList.remove("error");
    })
})

const submit = (e)=>{
    e.preventDefault();
    if (
        !phone.value.match(
          /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
        )
      ){
        phone.classList.add("error");
        error.textContent = "Give Proper Phone Number";
      }
}
const form = document.querySelector("form");
form.addEventListener("submit",submit);