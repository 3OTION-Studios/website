"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#button");

    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        document.body.style.backgroundColor = '#1d4268';
    });
});