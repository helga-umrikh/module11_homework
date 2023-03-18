//Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.

const greetingFn = () => {
    let name =  prompt('What is your name?');
    let lastName = prompt('What is you last name?');
    
    alert(`Hi, ${name} ${lastName}`);
};
