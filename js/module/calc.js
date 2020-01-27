function calc() {
    //CALC START
    let total = document.querySelector(".counter #total"),
        counterInputs = document.querySelectorAll(".counter input"),
        restPlaces = document.querySelector(".counter select"),
        sum = 0; 
    
    total.innerHTML= "0"
    counterInputs.forEach((elem)=>{
        elem.addEventListener("input", (event)=>{
            if((counterInputs[0].value && counterInputs[1].value) == ""){
                total.innerHTML = "0"
            }else{
                sum = (+counterInputs[0].value + (+counterInputs[1].value))*100
                total.innerHTML = sum
            }
            //set select option field to default :)
            restPlaces.value = "1"
        })
    })
    restPlaces.addEventListener("change", (e)=>{
        let a = sum
        total.innerHTML = a*e.target.value
    })
    //CALC END
}
export default calc;