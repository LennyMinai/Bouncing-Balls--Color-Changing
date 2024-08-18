const width = window.innerWidth;
const height = window.innerHeight;

const numOfBalls = 30;

function randomColor() {
    return 'hsl(${Math.random() * 360}, 70%, 50%';
} 

function generateBalls () {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = '${Math.random() * (width - 50)}px';
    ball.style.top = '${Math.random() * (height - 50)}px';
    ball.style.backgroundColor = randomColor();
    document.body.appendChild(ball);
    return ball;
}

function ballAnimation(ball) {
    let dy = (Math.random() - 0.5) * 8;
    let dx = (Math.random() - 0.5) * 8;

    function moveBall() {
        let x = parseFloat(ball.style.left);
        let y = parseFloat(ball.style.top);

        if (x + dx > width - 50 || x + dx < 0){
            dx = -dx;
            ball.style.backgroundColor = randomColor();
        }
        if (y + dy> height - 50 || y + dy < 0){
            dy = -dy;
            ball.style.backgroundColor = randomColor();
        }
        ball.style.left = '${x + dx}px';
        ball.style.top = '${y + dy}px';

        requestAnimationFrame(moveBall);
    }
    moveBall();
}

for (let i = 0; i < numOfBalls; i++){
    const ball= createBall();
    ballAnimation(ball);
}
