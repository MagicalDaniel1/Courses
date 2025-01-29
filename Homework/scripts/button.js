const exercises = [
    { title: "Задание 1", description: "Напишите программу, которая запрашивает возраст пользователя", hint: "Нажмите на кнопку и введите возраст" },
    { title: "Задание 2", description: "Напишите цикл, который выводит числа от 1 до 10 в консоль", hint: "Нажмите на кнопку и загляните в консоль" },
    { title: "Задание 3", description: "Создайте кнопку, которая меняет цвет фона страницы на синий, когда на нее нажимают", hint: "(Цвет будет изменён на 4 секунды, иначе глазкам будет немного больно т-т)" },
    { title: "Задание 4", description: "Напишите программу, которая с помощью цикла while выводит числа от 1 до 5", hint: "Нажмите на кнопку и загляните в консоль" },
    { title: "Задание 5", description: "Создайте викторину с одним вопросом: Солнце — это звезда?", hint: "Для подтверждения ответа нажмите кнопку" },
    { title: "Задание 6", description: "Напишите программу, которая выводит Чётные/Нечётные числа от 1 до 20:", hint: "Нажмите на кнопку и загляните в консоль" },
    { title: "Задание 7", description: "Создайте программу, которая выводит таблицу умножения для числа 5 (от 1 до 10)", hint: "Нажмите на кнопку и загляните в консоль" },
    { title: "Задание 8", description: "Создайте кнопку, которая меняет текст на -Вы кликнули дважды!- при двойном клике", hint: "Нажмите на кнопку" },
    { title: "Задание 9", description: "Создайте кнопку, которая меняет цвет фона страницы на случайный при каждом нажатии", hint: "Нажмите на кнопку" },
    { title: "Задание 10", description: "А закончим мы всё викториной, я надеюсь, что работа вам понравилась...", hint: "(хоть чуть-чуть)" }
];

function next_ex() {
    document.getElementById('fade_text1').classList.add('nv');
    document.getElementById('type-text').classList.add('nv');
    document.getElementById('confirm').classList.add('nv');
    setTimeout(function() {
        if (ex >= exercises.length) return;

        const task = exercises[ex];
        const exClass = `ex${ex + 1}`;
        document.getElementById("text-1").innerHTML = task.title;
        document.getElementById("text-2").innerHTML = task.description;
        document.getElementById("text-3").innerHTML = task.hint;

        document.getElementById('fade_text1').classList.add(exClass);
        document.getElementById('fade_text1').classList.remove('nv', `ex${ex}`);
        document.getElementById('butt').classList.toggle('disabled-hide', ex == 4);
        if (ex == 1) {
            document.getElementById('butt').setAttribute('onclick', 'exe2()');
        } else if (ex == 2) {
            document.getElementById('butt').setAttribute('onclick', 'exe3()');
        } else if (ex == 3) {
            document.getElementById('butt').setAttribute('onclick', 'exe4()');
        } else if (ex == 4) {
            document.getElementById('butt').setAttribute('onclick', 'exe5()');
            document.getElementById('type-text').classList.remove('nv');
            document.getElementById('confirm').classList.remove('nv');
        } else if (ex == 5) {
            document.getElementById('butt').setAttribute('onclick', 'exe6()');
        } else if (ex == 6) {
            document.getElementById('butt').setAttribute('onclick', 'exe7()');
        } else if (ex == 7) {
            document.getElementById('butt').setAttribute('onclick', '');
            document.getElementById('butt').setAttribute('ondblclick', 'exe8()');
        } else if (ex == 8) {
            document.getElementById('butt').setAttribute('onclick', 'exe9()');
            document.getElementById('butt').setAttribute('ondblclick', '');
            document.getElementById('butt').textContent = "Нажми";
        } else if (ex == 9) {
            document.getElementById('butt').setAttribute('onclick', 'exe10()');
            document.getElementById('butt').textContent = "Начать";
        }
        ex++;
    }, 1000);
}