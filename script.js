const popCat = document.getElementById('banana');
const scoreElement = document.getElementById('score');
let score = 0;

popCat.addEventListener('click', () => 
{
    score++;
    scoreElement.textContent = score;
    popCat.style.transform = 'scale(1.1)';
    setTimeout(() => {
        popCat.style.transform = 'scale(1)';
    }, 100);
});