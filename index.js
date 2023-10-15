age = prompt('Введите ваш возраст')
function whoareyou(age) {
    if (age > 60) return 'you are pensioner'
    if (age > 18) return 'you are adult'
    if (age > 12) return 'you are teenager'
    return 'you are child'
}
alert(whoareyou(age))

