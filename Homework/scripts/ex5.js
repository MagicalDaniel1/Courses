function exe5() {
    let inputText = document.getElementById('type-text').value.toLowerCase();
    if (inputText === "да") {
        document.getElementById('text-3').textContent = "Верно!";
    } else if (inputText === "нет") {
        document.getElementById('text-3').textContent = "Неправильно, солнце — это звезда";
    }
}