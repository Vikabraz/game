let win = prompt("привет, дядя! Как тебя зовут?");

while (win == "" || win == null) {
  win = prompt("Давай говори! флиртую с тобой - не видишь что ли?!?!?!");
}
//while (win == "" || win == null){
  alert("Точно " + win + "?? хочешь, Я с тобой поиграю....");



alert(win + " , я загадала число от 1 до 20. Угадай))");

let number = Math.ceil(Math.random() * 20);
let guess = prompt("Какое число я загадала?");
let numberOfGueses = 0;

while (guess != number) {
    if (guess > number) {
    guess = prompt("Перебор, попробуй меньше"); 
    numberOfGueses = numberOfGueses + 1;
}

if (guess < number) {
    guess = prompt("Недобор, попробуй больше");
    numberOfGueses = numberOfGueses + 1;
}
}

alert("Ты угадал " + win + "! Тебе понадобилось " + numberOfGueses + " попыток");
alert("Поздравляю, игра окончена")


