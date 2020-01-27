function form(){
    // FORM PROMISES START
    let message = {
        load: "Загрузка...",
        success: "Спасибо! В ближайщее время мы с вами свяжемся!",
        fail: "Что-то пошло не так..",
    };
    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusDiv = document.createElement("div");
    statusDiv.classList.add("status-div")

    function sendRequest(method ,url, data=null){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = "json";
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

            xhr.onload = () => {
                if(xhr.status == 200){
                    resolve(xhr.response)
                }else{
                    reject(Error(xhr.statusText))
                }
            };
            xhr.onerror = () => reject(Error("Network Error"));

            xhr.send(data)
        })
    }

    function makeBodyData(body){
        let data = new FormData(body)
        let obj = {};

        data.forEach(function(value,key){
            obj[key] = value;
        });
        let jsonData = JSON.stringify(obj);
        return jsonData;
    };

    //modal form
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        form.appendChild(statusDiv);

        sendRequest("POST", "server.php", makeBodyData(form))
            .then( () => {
                statusDiv.innerHTML = message.success
            }, () => {
                statusDiv.innerHTML = message.fail
            });
            for(let i = 0; i<input.length; i++){
                input[i].value ="";
            };
    });

    //mail form in last section
    let mailSecForm = document.querySelector(".contact-form #form"),
        mailSecInputs = mailSecForm.getElementsByTagName("input");
    
    function makeMailData(){
        let obj ={
            email: mailSecInputs[0].value,
            phone: mailSecInputs[1].value
        }
        let jsonData = JSON.stringify(obj);
        return jsonData;
    }
        
    mailSecForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        mailSecForm.appendChild(statusDiv);
        statusDiv.style.color = "white";

        sendRequest("POST", "server.php", makeMailData())
            .then( () => {
                statusDiv.innerHTML = message.success
            }, () => {
                statusDiv.innerHTML = message.fail
            });
            for(let i = 0; i<mailSecInputs.length; i++){
                mailSecInputs[i].value ="";
            };
    });
    // FORM PROMISES END
};
export default form;