let daytasks = ["8:30-13:40 Пережить пары","14:00-16:00 Свободное время","16:00-18:00 Курсы (Различные)","18:00-19:00 Выполнение Д/з (Колледж)","20:00-22:30 Работа над своими проектами (Или над Д/з по программированию)"];
        function kitty_emotions() {
        let energy_bar = 184 - daytasks.length * 18.4;
        if (energy_bar >= 92) {
        document.getElementById("kitty").src = "./images/Kitty.gif";
    }
        if (energy_bar >= 150) {
        document.getElementById("kitty").src = "./images/Happy_Kitty.gif";
    }
        if (energy_bar <= 91) {
        document.getElementById("kitty").src = "./images/Scared_Kitty.gif";
    }
        if (energy_bar <= 45) {
        document.getElementById("kitty").src = "./images/Sad_Kitty.gif";
    };
        if (energy_bar <= 0) {
        document.getElementById("kitty").src = "./images/Dead_Kitty.png";
        alert("Вы слишком сильно нагрузили котейку работой. К сожалению для вас, вам придётся облегчить его расписание");
    };
};
        window.onload = function()
{
    const fade = document.getElementById('body');
    fade.classList.add('v');
}

let energy_bar = 184 - 'daytasks.length' * 18.4;
if (energy_bar <= 80) {
    document.getElementById("kitty").src = "/images/Shy_Kitty.gif";
}

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

function delete_ex(num) {
    daytasks.splice(num, 1);
    show_work_list();
    bar_scale();
    kitty_emotions();
}

function bar_scale() {
    document.getElementById("energy_bar_size").style.width = 184 - daytasks.length * 18.4 + "px";
    document.getElementById("skill_bar_size").style.width = 0 + daytasks.length * 18.4 + "px";
}
bar_scale();

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