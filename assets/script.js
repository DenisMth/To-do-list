let submitButton = document.getElementById("submit");
let tasks = [];
let storedList = localStorage.getItem("tasklist");
let list = document.querySelector("ul");

if (storedList){
    const parsedTasks = JSON.parse(storedList);
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

tasks.forEach(element =>{
    let listElement = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listElement.appendChild(checkbox);
    checkbox.addEventListener("change", (event) =>{
        if (checkbox.checked){
            element.done = true;
            localStorage.setItem("tasklist", JSON.stringify(tasks));
            console.log("oui");
        } else {
            element.done = false;
            localStorage.setItem("tasklist", JSON.stringify(tasks));
            console.log("non");
        }
    })
    if (element.done){
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    let listElementName = document.createTextNode(element.name);
    listElement.appendChild(listElementName);
    list.appendChild(listElement);
})

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    let taskName = document.getElementById("taskName");
    let taskDescription = document.getElementById("taskDescription");

    if ((taskName.value !== "") && (taskDescription.value !== "")){
        const task = {
            name : taskName.value,
            description : taskDescription.value,
            done : false,
        }
        tasks.push(task);
        let listElement = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listElement.appendChild(checkbox);
        checkbox.addEventListener("change", (event) =>{
            if (checkbox.checked){
                task.done = true;
                localStorage.setItem("tasklist", JSON.stringify(tasks));
                console.log("oui");
            } else {
                task.done = false;
                localStorage.setItem("tasklist", JSON.stringify(tasks));
                console.log("non");
            }
        })
        checkbox.checked = false;
        let listElementName = document.createTextNode(taskName.value);
        listElement.appendChild(listElementName);
        list.appendChild(listElement);
    }
    console.log(tasks);
    localStorage.setItem("tasklist", JSON.stringify(tasks));

    taskName.value = "";
    taskDescription.value = "";
});

//localStorage.clear();
