function show_work_list() {
    let taskList = document.getElementById("ex_list_field");
    taskList.innerHTML = "";

    for (let i = 0; i < daytasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = "• " + daytasks[i];
        li.classList.add('ex_list');
        li.id = 'ex_list' + i;

        li.addEventListener('click', function() {
            delete_ex(i);
        });

        taskList.appendChild(li);
    }
}