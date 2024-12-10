var yosh = prompt('Сколько вам лет')
if(isNaN(yosh)){
    alert('Вы ввели неправильный возраст')
}
else if (yosh < 17) {
    alert('Yoshzsiz')
}
else if( yosh < 50)(
    alert('Siz ishlashingiz kerak')
) 
else if ( yosh < 60)(
    alert('Pensiya yaqin')
)
else if ( yosh > 59)(
    alert('Siz pensoionersiz')
)
var soat = prompt('Soat nechi')
if (soat < 13){
    alert(soat + ' часов утра')
}
else if ( soat < 17)(
    alert(soat + ' часов дня')
)
else if ( soat < 23)(
    alert(soat + ' часов вечера')
) 
else if(soat < 25)(
    alert('Вы ввели неправильное время')
)
var username = prompt('Ismaingizni kiriting')
var userName = "Humoyun" 
if (!isNaN(username)) {
    alert('Вы ввели неправильное имя');
} else if (userName === username) {
    alert("Hello Boss");
} else {
    alert("Hello guest");
}
let num1 = prompt("Введите первое число:")
let num2 = prompt("Введите второе число:")
let num3 = prompt("Введите третье число:")
let numbers = [num1, num2, num3];
numbers.sort((a, b) => a - b);
let middle = numbers[1];
alert("Среднее число " + middle);
