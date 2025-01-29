function exe10() {
    let score = 0;

    let ans1 = prompt("Вопрос 1: Солнце — это звезда? (да/нет)");
    if (ans1.toLowerCase() === "да") {
        score++;
    }
    
    let ans2 = prompt("Вопрос 2: Земля плоская? (да/нет)");
    if (ans2.toLowerCase() === "нет") {
        score++;
    }
    
    let ans3 = prompt("Вопрос 3: 2 + 2 = 4? (да/нет)");
    if (ans3.toLowerCase() === "да") {
        score++;
    }
    
    alert("Вы набрали " + score + " баллов из 3.");
}