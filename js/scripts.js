(function() {
    "use strict";

    let login = 'админ',
        password = 'чёрный властелин',
        log = prompt('Введите логин:');

    if (log == null) {
        alert('Вход отменён.');
    } else if (log.toLocaleLowerCase() != login) {
        alert('Неверный логин!');
    } else {
        let pass = prompt('Введите пароль:');
        if (pass == null) {
            alert('Выход отменён.');
        } else if (pass.toLocaleLowerCase() != password) {
            alert('Неверный пароль!');
        } else {
            alert('Добро пожаловать!')
        }
    }

    }());