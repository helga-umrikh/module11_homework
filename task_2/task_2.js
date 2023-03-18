//Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.

export const greetingFn = () => {
    let name =  prompt('What is your name?');
    let lastName = prompt('What is you last name?');
    
    if(name === '' || lastName === '' ) {
        return name = alert('Empty input, please, restart and try again');
      };


    alert(`Hi, ${name} ${lastName}`);
};
