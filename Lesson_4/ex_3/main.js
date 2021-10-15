'use strict';

let start = {

    score: 0,

    plus() {
        this.score++;
    },

    run() {
        // alert('Добро пожаловать на игру "Кто хочет стать миллионером?"');

        for (let i = 1; i < 6; i++) {
            let user_prompt = prompt(`${questions[i]}`);
            if (user_prompt == answers[i]) {
                alert('Правильно!')
                this.plus();
            } else {
                alert('НЕправильно')
            }
        }
        alert(`Правильных ответов: ${this.score} из 5`);
    },

};

start.run();
