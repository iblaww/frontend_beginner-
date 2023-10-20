const inputBox = document.getElementById("input-box");
const Listcontainer = document.getElementById("Listcontainer");

function addTask(){
    if(inputBox.value === ''){
    alert("You must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    Listcontainer.appendChild(li);
    }
    inputBox.value = "";
}