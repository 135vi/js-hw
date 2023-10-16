// №1
// age = prompt('Введите ваш возраст')
// function whoareyou(age) {
//     if (age > 60) return 'you are pensioner';
//     if (age > 18) return 'you are adult';
//     if (age > 12) return 'you are teenager';
//     return 'you are child';
// }
// alert(whoareyou(age))

// №2
// let numbers = prompt('Введите число')
// function specialsymbol() {
//     if(numbers == 0) {
//         alert(')')
//     }else if (numbers == 1) {
//         alert('!')
//     }else if (numbers == 2) {
//         alert('@')
//     }else if (numbers == 3) {
//         alert('#')
//     }else if (numbers == 4) {
//         alert('$')
//     }else if (numbers == 5) {
//         alert('%')
//     }else if (numbers == 6) {
//         alert('^')
//     }else if (numbers == 7) {
//         alert('&')
//     }else if (numbers == 8) {
//         alert('*')
//     }else if (numbers == 9) {
//         alert('(')
//     }else if (numbers > 9) {
//         alert('Больше 9 вводить нельзя!')
//     }
// }
// specialsymbol()

// №3
// var nut =+ prompt('Введите трехзначное число');
// switch(true) {
//     case(nut % 10 == parseInt(nut / 10 % 10)):
//         alert('В этом числе вторая и тетья цифра одинаковые')
//         break;
//     case(parseInt(nut / 100)) == (parseInt(nut / 10 % 10)):
//         alert('В этом числе первая и вторая цифра одинаковые')
//         break;
//     case(nut % 10 == parseInt(nut / 100)):
//         alert('В этом числе первая и тетья цифра одинаковые')
//         break;
//     default: alert('Все цифры различны');
//     break;
// }

// №4
// year = prompt('Введите год');
// function whatyear(year) {
//     if(year % 400 == 0) return 'Введенный год является високосным';
//     if(year % 4 == 0) return 'Введенный год является високосным';
//     if(year % 100 !== 0) return 'Введенный год не является високосным';
//     return 'Введенный год не является високосным'
// }
// alert(whatyear(year))

// №5
// let palindrom = 0;
// do {
//     palindrom = Math.abs(+prompt('Введите пятиразрядное число для проверки на палиндром'));
// }while(palindrom < 10000 || palindrom > 99999);
// let array = [];
// for (i = 0; i < 5; i++) {
//     array[i] = palindrom % 10;
//     palindrom = Math.trunc(palindrom / 10);
// }
// if(array[0] == array[4] && array[1] == array[3]) {
//     alert('Да, это число палиндром')
// }else {
//     alert('Нет, введенное число не палиндром');
// }

// №6
// let summa = Math.abs(+prompt('Введите сумму USD для обмена'));
// const eur = Number(1.08);
// const uan = Number(0.15);
// const azn = Number(0.59);
// let rate = "";
// do {
//   rate = prompt('На какую валюту вы хотите обменять доллары? Введите EUR для обмена на евро, UAN для обмена на юани, либо AZN для азербайджанских манатов.');
//   rate = rate.toUpperCase();
// } while (rate != "EUR" && rate != "UAN" && rate != "AZN");
// let convert_summa = 0;
// if(rate == "EUR") {
//   convert_summa = (summa * eur).toFixed(2);
// }
// if(rate == "UAN") {
//   convert_summa = (summa * uan).toFixed(2);
// }
// if(rate == "AZN") {
//   convert_summa = (summa * azn).toFixed(2);
// }
// alert(`Вы поменяли ${summa} USD на ${convert_summa} ${rate}`);

// №7
// let check_sale = Math.abs(+prompt('Введите сумму вашей покупки'));
// let discount = Number(0);
// if(check_sale >= 200 && check_sale <= 300) {
//   discount = 3;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// if(check_sale > 300 && check_sale <= 500) {
//   discount = 5;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// if(check_sale > 500) {
//   discount = 5;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// alert(
//   `Вы купили товары на сумму ${
//     check_sale / (1 - discount / 100)
//   } рублей. Ваша скидка ${discount}% - ${
//     ((check_sale / (1 - discount / 100)) * discount) / 100
//   } рублей. Всего к оплате ${check_sale} рублей.`
// );

// №8
// let circuit = +prompt('Введите длину окружности');
// let perimeter = +prompt('Введите периметр квадрата');
// if (circuit / 2 / Math.PI > perimeter / 4 / 2) {
//   alert('Окружность данной длины не впишется в данный квадрат');
// } else {
//   alert('Окружность данной длины впишется в данный квадрат');
// }

// №9
// alert('Итак, вы разведчик. Запоминайте вашу легенду. Вы женщина, вам 23 года, вы радистка. А теперь потренируем вашу память. Помните, каждый прокол ведет вас к провалу, вы не должны выдать себя!');
//   let penalty_counter = Number(0);
//   alert('Вопрос первый, сейчас вам выведут поочередно три варианта о вашем возрасте. Будьте внимательны в оценке каждого.');
//   let question_a = confirm('Ваш возраст старше 100 лет?');
//   let question_b = confirm('Вы уже вышли на пенсию?');
//   let question_c = confirm('До пенсии еще работать и работать!');
//   if(question_c == true) {
//     penalty_counter += 2;
//   }
//   alert('Вопрос второй, касаемо вашего пола. Ну хоть тут не запутайтесь!');
//   question_a = confirm('Вы мужчина?');
//   question_b = confirm('Вы женщина?');
//   question_c = confirm('Кто здесь?');
//   if(question_b == true) {
//     penalty_counter += 2;
//   }
//   alert('Вопрос третий, о вашей профессии. Повнимательнее! Кто вы профессии?');
//   question_a = confirm('Я радистка в вашем тылу!');
//   question_b = confirm('Я певец Николай Басков!');
//   question_c = confirm('Я не такая и вообще вожу трамвай!');
//   if(question_a == true) {
//     penalty_counter += 2;
//   }
//   if(penalty_counter > 0) {
//     alert('Штирлиц никогда так не был близок к провалу! ${(penalty_counter /= 2)} неправильных ответа и ${penalty_counter} штрафных балла!');
//   }else {
//     alert('А вы вполне себе радистка Кэт! 0 штрафных баллов, поздравляем!');
//   }

// №10
// var date = Math.abs(Math.floor(Number(prompt('Введите число месяца от 1 до 31'))));
// var month = Math.abs(Math.floor(Number(prompt('Введите порядковый номер месяца от 1 до 12'))));
// var year = Math.floor(Number(prompt('Введите год')));
// if(date < 1 || date > 31 || month < 1 || month > 12) {
//     date = 1;
//     month = 1;
//     alert('Вы некорректно указали день либо порядковый номер месяца. Дата автоматически будет сброшена на 1 января. Для повторного ввода данных обновите страницу (клавиша F5)');
// }
// if((month < 10) & (date < 10)) {
//     alert(`Вы запросили дату 0${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`);
// }else if((month > 9) & (date < 10)) {
//     alert(`Вы запросили дату 0${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`);
// }else if((month < 10) & (date > 9)) {
//     alert(`Вы запросили дату ${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`);
// }else {
//     alert(`Вы запросили дату ${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`);
// }
// var leap_year = Number(0);
// if((year % 4 == 0) & (year % 100 != 0) || year % 400 == 0) {
//     leap_year = 1;
//     alert('Введенный вами год является високосным по григорианскому календарю');
// }
// var new_date = date;
// var new_month = month;
// var new_year = year;
// new_date += 1;
// if((new_date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//     new_date = 1;
//     new_month += 1;
// }
// if((new_date > 31) & (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
//     new_date = 1;
//     new_month += 1;
// }
// if((new_date > 31) & (month == 12)) {
//     new_date = 1;
//     new_month = 1;
//     new_year += 1;
// }
// if((new_date > 28) & (month == 2) & (leap_year == 0)) {
//     new_date = 1;
//     new_month = 3;
// }
// if((new_date > 29) & (month == 2) & (leap_year == 1)) {
//     new_date = 1;
//     new_month = 3;
// }
// if ((date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//     date = 0;
// }
// if((date > 31) & (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
//     date = 0;
// }
// if((date > 28) & ((month == 2) & (leap_year == 0))) {
//     date = 0;
// }
// if((date > 29) & ((month == 2) & (leap_year == 1))) {
//     date = 0;
// }
// if(date == 0) {
//     alert('Вы ввели некорректную дату, обновите страницу и попробуйте снова');
// }else {
//     if((new_month < 10) & (new_date < 10)) {
//       alert(`Следующая дата 0${new_date}.0${new_month}.${new_year}`);
//     }else if((new_month > 9) & (new_date < 10)) {
//       alert(`Следующая дата 0${new_date}.${new_month}.${new_year}`);
//     }else if((new_month < 10) & (new_date > 9)) {
//       alert(`Следующая дата ${new_date}.0${new_month}.${new_year}`);
//     }else {
//       alert(`Следующая дата ${new_date}.${new_month}.${new_year}`);
//     }
// }