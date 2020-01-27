function timer(){
    // // TIMER START
    let deadLine = "2021-01-11T22:20:00";

    function getTimeFromNowToDeadLine(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        t < 0 ? t = 0 : t; //if time end and deadLine hasn't been update

        let s = Math.floor((t / 1000) % 60),
            m = Math.floor((t / 1000 / 60) % 60),
            h = Math.floor((t / (1000 * 60 * 60))); //h from 0 to infinity    
        //let hours = Math.floor((t/1000/60/60) % 24); //h from 0 to 24
        //let days = Math.floor((t/(1000*60*60*24))); //d from 0 fo inf

        return {
            "total": t,
            "hours": h,
            "minutes": m,
            "seconds": s
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            h = timer.querySelector(".hours"),
            m = timer.querySelector(".minutes"),
            s = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeFromNowToDeadLine(endtime);
            h.textContent = t.hours;
            m.textContent = t.minutes;
            s.textContent = t.seconds;

            // //adding 0 berofe number
            (h.innerHTML.length < 2) ? (h.textContent = "0" + h.textContent) : h.textContent;
            (m.innerHTML.length < 2) ? (m.textContent = "0" + m.textContent) : m.textContent;
            (s.innerHTML.length < 2) ? (s.textContent = "0" + s.textContent) : s.textContent;

            if (t.total <= 0) {
                clearInterval(timeInterval)
            };
        };
    };
    setClock("timer", deadLine);
    // // TIMER END
};
export default timer;