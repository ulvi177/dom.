"use strict";
$(document).ready(function () {


    function add() {
        let input = $("input");
        let value = input.value.trim();
        if (value === "") {
            let div = $("div");
            div.className = "todo-item";
            div.textContent = value
            $("#list").appendChild(div);
            input.value = "";




        });






});

