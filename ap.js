let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let dellBtn = document.createElement("button");
    dellBtn.innerText = "delete";
    dellBtn.classList.add("delete");

    item.appendChild(dellBtn);
    ul.appendChild(item);
    
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    console.log(event.target);
    console.log("button clicked");

    
    if (event.target.classList.contains("delete")) {
        console.log("Element deleted");
        event.target.parentElement.remove();
    }
});
