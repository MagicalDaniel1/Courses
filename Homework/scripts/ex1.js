function exe1() {
    let inputText = prompt("Введите возраст:");
    if (inputText >= 18) {
        document.getElementById('text-3').textContent = "Вы совершеннолетний";
    } else {
        document.getElementById('text-3').textContent = "Вы не совершеннолетний";
        }
    }