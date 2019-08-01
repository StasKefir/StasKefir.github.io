let btnScroll = document.querySelector(".arr-wrap"),
    weAreBlock = this.document.querySelector("#weAre"),
    btnSubmit = document.querySelector(".button-submit"),
    inputsForm = document.querySelectorAll(".form-input"),
    inputPhone = document.querySelector("#phone"),
    inputEmail = document.querySelector("#email");






btnScroll.addEventListener("click", function () {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        positionWeAre = weAreBlock.getBoundingClientRect(),
        topWeAre = positionWeAre.top;

    console.log(positionWeAre.left);
    console.log(positionWeAre.right);

    if (positionWeAre.right == 750 || positionWeAre.right < 750) {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
        console.log("ups");
    } else {
        window.scrollTo({
            top: 870,
            behavior: "smooth"
        });
    }


});
btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    for (let i = 0; i < inputsForm.length; i++) {
        if (inputsForm[i].value == false) {
            swal("Incorrect input!");
            return false;
        }
    }
    swal("Success!", "data sent!", "success");
    clearInput();
   
    setTimeout( sendMail, 1000);
   

});
inputPhone.addEventListener('input', function(){
    if (!validatePhone(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});

function sendMail() {
    let link = "mailto:staskefir99@gmail.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("This is my subject") +
        "&body=" + escape(document.querySelector('.area-mess').value) + escape();

    window.location.href = link;
}

function clearInput() {
    inputsForm.forEach(function (item) {
        item.value = "";
    });
}
function validatePhone (a) {
    return /^(|\d)\d{0,12}$/.test(a);
}
