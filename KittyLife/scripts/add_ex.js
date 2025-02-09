function add_ex() {
    let taskInput = document.getElementById("add_ex_field").value;

    if (taskInput === "") {
        document.getElementById('add_ex_field').value = "Внесите задачу!";
        return;
    }

    daytasks.push(taskInput);
    document.getElementById("add_ex_field").value = "";

    show_work_list();
    bar_scale();
    kitty_emotions();
}