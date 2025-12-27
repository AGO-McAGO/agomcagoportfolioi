"use strict";


export const presentyear = () => {
    const curYear = document.getElementById("currentyear");
    curYear.innerHTML = new Date().getFullYear();
};