
const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = prompt(`Guess the number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        alert(`Please enter a valid number`);
    }
    else if (guess < minNum || guess > maxNum) {
    alert(`Please enter a valid number`);
    }
    else {
        attempts++;
        if (guess > answer) {
            alert(`Your guess is too HIGH! try again`);
        }
        else if (guess < answer) {
            alert(`Your guess is too LOW! try again`);           
        }
        else {
            alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}