const button = document.getElementById('myButton');
const result = document.getElementById('result');
const computer_guess = document.getElementById('computer-guess');

button.addEventListener('click', function(e) {
  console.log('button was clicked');

  if (document.getElementById('r1').checked) {
    option_value = document.getElementById('r1').value;
  } else if (document.getElementById('r2').checked) {
    option_value = document.getElementById('r2').value;
  } else if (document.getElementById('r3').checked) {
    option_value = document.getElementById('r3').value;
  }

  computer_option_int = Math.floor(Math.random() * 3) + 1;

  switch (computer_option_int){
      case 1:
        computer_option = 'Rock';
        break;
      case 2: 
        computer_option = 'Paper';
        break;
      case 3: 
        computer_option = 'Scissors';
        break;
  }
    console.log(computer_option);
  computer_guess.innerHTML = 'Computer guessed ' + computer_option;
  if (computer_option === option_value) {
      result.innerText = "DRAW!";
  }

  if (option_value === "Rock") {
      if (computer_option === "Paper") {
          result.innerText = "LOSE!";
      } else if (computer_option === "Scissors") {
          result.innerText = "WIN!";
      }
  }

  if (option_value === "Paper") {
        if (computer_option === "Scissors") {
            result.innerText = "LOSE!";
        } else if (computer_option === "Rock") {
            result.innerText = "WIN!";
        }
    }

    if (option_value === "Scissors") {
        if (computer_option === "Rock") {
            result.innerText = "LOSE!";
        } else if (computer_option === "Paper") {
            result.innerText = "WIN!";
        }
    }

});