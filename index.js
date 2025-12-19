const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
let width, height, snowflakes = [];
// canvas resize
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

// Create Snow
function createSnowflakes() {
    const count = 150; //count Snow
    snowflakes = [];
    for (let i = 0; i < count; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1, // random
            speed: Math.random() * 1 + 0.5, // speed
            opacity: Math.random() 
        });
    }
}

// funtion snow
function update() {
    ctx.clearRect(0, 0, width, height); 

    snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        flake.y += flake.speed; 

        // 
        if (flake.y > height) {
            flake.y = -10;
            flake.x = Math.random() * width;
        }
    });
    requestAnimationFrame(update); 
}

// Snowrun!!!
window.addEventListener('resize', resize);
resize();
createSnowflakes();
update();


//Countdown Timer

// Set datetime 25 December 2025
const countdownDate = new Date("Dec 25, 2025 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Check if these elements are present in the HTML before displaying it to prevent errors.
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    // If time runs out, stop the counter.
    if (distance < 0) {
        clearInterval(timer);
        const container = document.querySelector(".countdown-container");
        if (container) {
            container.innerHTML = "<h1>Merry Christmas!</h1>";
        }
    }
}, 1000);


function setSnowSpeed(mode) {
    snowflakes.forEach(flake => {
        if (mode === 'storm') {
            // Strom
            flake.speed = Math.random() * 5 + 3; 
        } else {
            // Clam
            flake.speed = Math.random() * 1 + 0.5;
        }
    });
}