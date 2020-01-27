function modal() {
    // // BUTTONS "MORE" IN TABS AND AFTER TIMER. START  
    let overlay = document.querySelector(".overlay"),
        popupClose = document.querySelector(".popup-close"),

        more = document.querySelector(".more"),
        btnsMore = document.querySelectorAll(".description .description-btn");

    function showModal (){
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";   
    };
        
    function closeModal (){
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = ""; 
        //form.removeChild(statusDiv);  
    };

    btnsMore.forEach(function(elem){
        elem.addEventListener("click", showModal);
    });
    more.addEventListener("click", showModal);
    popupClose.addEventListener("click", closeModal);

    //remove modal after "esc" press
    document.body.onkeyup = function (event) {
        event.keyCode == 27 ? closeModal() : null;
    }; 
    // // BUTTONS "MORE" IN TABS AND AFTER TIMER. END
};

export default modal;