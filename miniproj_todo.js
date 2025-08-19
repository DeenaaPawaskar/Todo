let task = document.querySelector("#task");
let submit = document.querySelector("#addtask");
let clear = document.querySelector("#clear");
let ul = document.querySelector("ul");

submit.addEventListener("click", function () {
    let todo = task.value.trim();
    if (todo === "") return; 

    let list = document.createElement("li"); 
    list.innerText = todo; 
    list.classList.add("listLine");
    ul.append(list); 

    
    list.addEventListener("click", function () {
        this.style.textDecoration = "line-through";
    });

    list.addEventListener("dblclick", function () {
        this.style.textDecoration = "none";
    });

    task.value = ""; 
});

task.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        submit.click(); 
    }
});

clear.addEventListener("click", function () {
    ul.innerHTML = ""; 
});
