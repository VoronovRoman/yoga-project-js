export default function tabs() {
        // // MY TABS. START
    let parentTabName = document.querySelector(".info-header"),
        tabName = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        };
    };
    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        };
    };

    parentTabName.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tabContent.length; i++) {
                if (event.target == tabName[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                    break;
                }
            }
        }
    });
    // // MY TABS. END
};