const clickOn = document.getElementById('banana');
const scoreElement = document.getElementById('score');
let score = 0;

clickOn.addEventListener('click', () => 
{
    score++;
    scoreElement.textContent = score;
    clickOn.style.transform = 'scale(1.5)';
    setTimeout(() => 
    {
        clickOn.style.transform = 'scale(1)';
    }, 100);
});
