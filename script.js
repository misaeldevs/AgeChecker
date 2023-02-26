function check(){
    var data = new Date()
    var year = data.getFullYear()
    var formYear = document.querySelector("#txtyear")
    var result = document.querySelector("#result")

    if(formYear.value.length == 0 || formYear.value > year){
        alert("[ERROR] Check the information provided and try again!")
    } else{
        var sex = document.getElementsByName("radsex")
        var age = year - Number(formYear.value)
        var gender = ""
        var img = document.createElement("img")
        img.setAttribute("id", "photo")

        if(sex[0].checked){
            gender = "Male"
            if(age >= 0 && age <= 10){
                img.setAttribute("src", "criancamasculino.png")
            } else if (age < 21){
                img.setAttribute("src", "jovemmasculino.png")
            } else if(age < 50){
                img.setAttribute("src", "homemadulto.png")
            }else {
                img.setAttribute("src", "idosomasculino.png")
            }
        } else {
            gender = "Female"
            if(age >= 0 && age < 10){
                img.setAttribute("src", "criancafeminina.png")
            } else if (age < 21){
                img.setAttribute("src", "jovemfeminina.png")
            } else if(age < 50){
                img.setAttribute("src", "mulheradulta.png")
            }else {
                img.setAttribute("src", "idosafeminina.png")
            }
        }
        result.style.textAlign = "center"
        result.innerHTML = `Detected a ${age} years old ${gender}`
        result.appendChild(img)
    }
}