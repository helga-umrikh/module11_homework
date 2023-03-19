/*Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»

добавить ее в репозиторий;
продумать тест-кейсы (успешное/неуспешное выполнение функции);
продумать корнер-кейсы; 
написать unit-тесты (минимум 3).
Удачи! */


//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

export const getMonth = (num) => {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'Juli',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    if(num <= 0 || num > 12) {
        return 'Invalid number!';
    } else {
        return months[num - 1];
    };
};
