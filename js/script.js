"use strict";

import tabs from "./module/tabs.js";
import modal from "./module/modal.js";
import timer from "./module/timer.js";
import form from "./module/form.js";
import slider from "./module/slider.js";
import calc from "./module/calc.js";

window.addEventListener("DOMContentLoaded", function (){
    tabs();
    modal();
    timer();
    form();
    slider();
    calc();
});
// 1st method 
//export default function/const moduleName
//import moduleName from "./path.js";
// moduleName()

// 2st method
// export function/const moduleName
// import {moduleName} from "./path.js";
// moduleName()


