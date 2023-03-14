let btn = document.querySelector(".btn1")
btn.addEventListener('click', function openPopup() {
    popup.classList.add("open-popup");
})

let btnc = document.querySelector(".btn3")
btnc.addEventListener('click', function closePopup() {
    popup.classList.remove("open-popup");
})


let btn2 = document.querySelector(".btn2")
btn2.addEventListener('click', function openPopup2() {
    popup2.classList.add("open-popup2");
})

let btnc2 = document.querySelector(".btn5")
btnc2.addEventListener('click', function closePopup2() {
    popup2.classList.remove("open-popup2");
})

let btn3 = document.getElementById("b2")
btn3.addEventListener('click', function openPopup3() {
    popup3.classList.add("open-popup3");
})

let btnc3 = document.querySelector(".btn6")
btnc3.addEventListener('click', function closePopup3() {
    popup3.classList.remove("open-popup3");
})


//  let btn1 = document.querySelector(".btnPrimary")
 let btn1 = document.getElementById("b1")
btn1.addEventListener('click', function openPopup1() {
    popup1.classList.add("open-popup1");
})

let btnc1 = document.querySelector(".btn4")
btnc1.addEventListener('click', function closePopup1() {
    popup1.classList.remove("open-popup1");
})


document.getElementById("password1").addEventListener("click", function() {
    alert("password must be 10 characters or more, must have at least one uppercase, one number and one special character")
  })

document.getElementById("login").addEventListener("click", function () {
    pswcheck1()
     
  })
  
let msg1 = document.getElementById("message1")
function pswcheck1() {
    let psw1 = document.getElementById("password1").value
    if (psw1.length < 10) {
        msg1.innerHTML = "password length must be 10 characters or more."
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[0-9]/) == -1) {
        msg1.innerHTML = "At least have one number"
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[A-Z]/) == -1) {
     
        msg1.innerHTML= "At least have one uppercase"
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[!@#$%^&*()_+-=\[\]{};"\\,.<>]/) == -1) {
        msg1.innerHTML = "At least have one special character"
        msg1.style.color = "red"
        return false
    }
    else{
        msg1.innerHTML= "Success"
        msg1.style.color = "green"
        return true
    }
}

document.getElementById("list").onchange=function(){
    let selectedItem=this.value
    document.getElementById("r").innerHTML=selectedItem
}

document.getElementById("list1").onchange=function(){
    let selectedItem=this.value
    document.getElementById("r1").innerHTML=selectedItem
}
document.getElementById("list2").onchange=function(){
    let selectedItem=this.value
    document.getElementById("r2").innerHTML=selectedItem
}
document.getElementById("list3").onchange=function(){
    let selectedItem=this.value
    document.getElementById("r3").innerHTML=selectedItem
}
document.getElementById("list4").onchange=function(){
    let selectedItem=this.value
    document.getElementById("r4").innerHTML=selectedItem
}

let price=document.getElementById("price").innerHTML
let quantity=document.getElementById("quantity").innerHTML
let subtotal=parseInt(price)*parseInt(quantity)
let sub=String(subtotal)
document.getElementById("subtotal").innerHTML=sub

let btn7 = document.getElementById("btn7")
btn7.addEventListener('click', function openPopup4() {
    popup4.classList.add("open-popup4");
})

let btnc7 = document.querySelector(".btn8")
btnc7.addEventListener('click', function closePopup4() {
    popup4.classList.remove("open-popup4");
})

let btn8 = document.getElementById("btn9")
btn8.addEventListener('click', function openPopup5() {
    popup5.classList.add("open-popup5");
})

let btnc8 = document.querySelector(".btn10")
btnc8.addEventListener('click', function closePopup5() {
    popup5.classList.remove("open-popup5");
})
let btn9 = document.getElementById("btn11")
btn9.addEventListener('click', function openPopup6() {
    popup6.classList.add("open-popup6");
})

let btnc9 = document.querySelector(".btn12")
btnc9.addEventListener('click', function closePopup6() {
    popup6.classList.remove("open-popup6");
})
