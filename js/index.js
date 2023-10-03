function setLabelPlace(){
    let fields = document.querySelectorAll(".fg input")

    fields.forEach(field => {
        setLabelPosition(field)

        field.onchange = ()=> {
            setLabelPosition(field)
        }

        function setLabelPosition() {
            if(field.value !== ""){
                field.classList.add("_filled")
            } else{
                field.classList.remove("_filled")
            }
        }


    })
}


setLabelPlace()

let passFields = document.querySelectorAll(".pass-field")
passFields.forEach(passField => {
    let passToggleBtn = passField.querySelector(".pass-toggle")
    let input = passField.querySelector("input")

    passToggleBtn.onclick = function () {
        if(passToggleBtn.classList.contains("_active")){
            input.setAttribute("type","password")
            passToggleBtn.classList.remove("_active")
        } else{
            input.setAttribute("type","text")
            passToggleBtn.classList.add("_active")
        }
    }
})

let openLogin = document.querySelector("._open-login")
let mainSection = document.querySelector(".main")

if(openLogin){
    openLogin.onclick = function () {
        mainSection.classList.add("_login")
    }
}
