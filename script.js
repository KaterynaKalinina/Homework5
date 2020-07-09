// The task at the lesson

function pow(n, p) {
    let value = n;
    if (p === 0) return 1;
    for (let i = 1; i < p; i++) {
        n *= value;
    }
    return n;
}
console.log(pow(2,3));


// Task 2


function runTheGame() {
    let randomNum = Math.round(Math.random() * 10);
    console.log(randomNum);
    let userNumber;

    if (userNumber === randomNum) return true;

    while (+userNumber !== randomNum && userNumber !== null) {
        userNumber = prompt('Enter a number up to 10', '');
        if (isNaN(userNumber) || userNumber === '') {
            alert('Sorry, we need a number!');
        };

        if (userNumber === null) return 1;
    };
}

function gameRusults(){
    let results = runTheGame();
    if (results === undefined) {
        alert('Congrats! You won! Game is over!');
    } else {
     alert('Game is over!');
    };
};

gameRusults();

// Trying to find another solution to the second task, but I haven't figured it out so far

function run() {
    let userNumber = prompt('Enter a number up to 10', '');

    if (userNumber === null){
        return false;
    } else if (isNaN(userNumber) || userNumber === '') {
        return undefined;
    } else {
        return +userNumber;
    };
};

function processResults() {
    let randomNum = Math.round(Math.random() * 10);
    console.log(randomNum);
    let result = run();

 

    while(result !== randomNum) {
        if (result === false) {
            alert('Game is over!');
        } else if (result === randomNum) {
            alert('Congrats! You won! Game is over!');
        } else if (result === undefined) {
            alert('Sorry, we need a number');
        };
        result = run();
};
 

};

 processResults();