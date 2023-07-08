const setofWords = ["My name is sumit kumar shriwastava and i am a student,",
    "Hello users you are using my own made typing speed,",
    "Hope you are having fun this is a simple game you can make.",
    "The sun peeked through the clouds, casting a warm golden glow over the tranquil meadow. The gentle breeze rustled the leaves of the trees, creating a soothing melody. Birds chirped happily, filling the air with their joyful songs. In the distance, a river meandered through the landscape, its crystal-clear waters reflecting the vibrant colors of the surrounding flowers. Nature seemed to be in perfect harmony, creating a serene and peaceful atmosphere.",
    "The city buzzed with energy as people hurriedly went about their day. Skyscrapers reached towards the sky, their glass windows glinting in the sunlight. Cars honked, buses rumbled, and footsteps echoed on the bustling streets. Neon signs illuminated the night, creating a vibrant and colorful spectacle. Cafes and restaurants filled with laughter and the aroma of freshly brewed coffee. Amidst the urban chaos, each person had their own story, their own dreams and aspirations, intertwining in the tapestry of city life."];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);


    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

let speed = Math.round((wordCount / totalTime) * 60);
let finalMsg = "you typed total at " +speed+ "words per minutes";
msg.innerText = finalMsg;

}
const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText === 'Start') {
        typeWords.disabled = false;
        playGame();
    }
    else if (this.innerText === "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})