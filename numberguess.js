const randomnumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkguess() {
    const userguess = document.getElementById('userguess').value;
    attempts++;
    if(userguess <= 0 ||userguess==='' || userguess > 100){
        document.getElementById('result').innerHTML = 'plz select number between 1 to 100';
    }
    else{
        if (userguess == randomnumber) {
            document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number ${randomnumber} in ${attempts} attempts.`;
            document.getElementById('result').style.color="green" 
        } 
        else if (userguess > randomnumber){
            document.getElementById('result').innerHTML = ` ${userguess} this number  is too big`;
            document.getElementById('result').style.color="red" 
        }
        else if (userguess < randomnumber){
            document.getElementById('result').innerHTML = `${userguess} this number is too small`;
            document.getElementById('result').style.color="red" 
        }

    }

}