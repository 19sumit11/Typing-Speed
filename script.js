const setofWords = [
    "My name is sumit kumar shriwastava and I am a student.",
    "Hello users, you are using my own-made typing speed game.",
    "Hope you are having fun! This is a simple game you can enjoy.",
    "The sun peeked through the clouds, casting a warm golden glow over the tranquil meadow.",
    "The city buzzed with energy as people hurriedly went about their day.",
  ];
  
  const msg = document.getElementById('msg');
  const typeWords = document.getElementById('mywords');
  const btn = document.getElementById('btn');
  let startTime, endTime;
  
  const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setofWords.length);
    msg.innerText = setofWords[randomNumber];
    typeWords.disabled = false;
    typeWords.value = '';
    typeWords.focus();
    startTime = new Date().getTime();
    btn.innerText = "Done";
  }
  
  const endPlay = () => {
    endTime = new Date().getTime();
    let totalTime = ((endTime - startTime) / 1000);
  
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
  
    let speed = Math.round((wordCount / totalTime) * 60);
    let accuracy = calculateAccuracy(msg.innerText, totalStr);
  
    let finalMsg = `You typed ${wordCount} words in ${totalTime} seconds at a speed of ${speed} words per minute with an accuracy of ${accuracy}%.`;
    msg.innerText = finalMsg;
  
    typeWords.disabled = true;
    btn.innerText = "Start";
  }
  
  const calculateAccuracy = (expected, typed) => {
    let expectedWords = expected.split(" ");
    let typedWords = typed.split(" ");
    let correctWords = 0;
  
    expectedWords.forEach((word, index) => {
      if (word === typedWords[index]) {
        correctWords++;
      }
    });
  
    let accuracyPercentage = (correctWords / expectedWords.length) * 100;
    return accuracyPercentage.toFixed(2);
  }
  
  const wordCounter = (str) => {
    let response = str.trim().split(" ").filter(word => word !== '').length;
    return response;
  }
  
  btn.addEventListener('click', function () {
    if (this.innerText === 'Start') {
      playGame();
    } else if (this.innerText === "Done") {
      endPlay();
    }
  });
  