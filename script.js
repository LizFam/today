//
// Puzzle One
//

function checkInputsAligned(event) {
  if (event.target.value == rangeOne.value) {
    event.target.classList.add('aligned');
  } else {
    event.target.classList.remove('aligned');
  }
  
  if (rangeTwo.value == rangeOne.value) {
    if (rangeThree.value == rangeTwo.value) {
      finishPuzzleOne.classList.remove('hidden');
    }
  }
}

function finishPuzzleOneClick() {
  puzzleOne.classList.add('hidden');
  puzzleTwo.classList.remove('hidden');
}

rangeInputs.onchange = checkInputsAligned;
finishPuzzleOne.onclick = finishPuzzleOneClick;


//
// Puzzle Two
//

function stepOneClick() {
  stepOne.classList.add('unlocked');
}

function stepTwoClick() {
  if (stepOne.classList.contains('unlocked')) {
    stepTwo.classList.add('unlocked'); 
  }
}

function stepThreeClick() {
  if (stepTwo.classList.contains('unlocked')) {
    stepThree.classList.add('unlocked');
    finishPuzzleTwo.classList.remove('hidden');
  }
}

function finishPuzzleTwoClick() {
  puzzleTwo.classList.add('hidden');
  puzzleThree.classList.remove('hidden');
}

stepOne.onclick = stepOneClick;
stepTwo.onclick = stepTwoClick;
stepThree.onclick = stepThreeClick;
finishPuzzleTwo.onclick = finishPuzzleTwoClick;


//
// Puzzle Three
//

function checkFinalInput() {
  if (finalInput.value == 'one two three') {
    puzzleThree.classList.add('hidden');
    celebration.classList.remove('hidden');
  }
}

finishPuzzleThree.onclick = checkFinalInput;
