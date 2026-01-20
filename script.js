// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Smooth navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-section');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
        
        navMenu.classList.remove('active');
    });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Enhanced Ice Particles with more variety
function createIceParticles() {
    const container = document.querySelector('.ice-particles');
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const isGlowing = Math.random() > 0.5;
        
        particle.className = 'ice-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${isGlowing ? 
                'radial-gradient(circle, rgba(125, 211, 252, 0.9), rgba(91, 173, 255, 0.5))' : 
                'radial-gradient(circle, rgba(186, 230, 253, 0.9), rgba(91, 173, 255, 0.4))'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-complex ${Math.random() * 12 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 ${size * 3}px ${isGlowing ? 'rgba(125, 211, 252, 0.8)' : 'rgba(91, 173, 255, 0.6)'};
            filter: blur(${Math.random() * 1}px);
        `;
        container.appendChild(particle);
    }
}

// Dramatic Ice Shards like Ultimate
function createIceShards() {
    const container = document.querySelector('.ice-shards');
    const shardCount = 25;
    
    for (let i = 0; i < shardCount; i++) {
        const shard = document.createElement('div');
        const size = Math.random() * 60 + 30;
        const isDeep = Math.random() > 0.5;
        
        shard.className = 'ice-shard';
        shard.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 2.5}px;
            background: ${isDeep ? 
                'linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(91, 173, 255, 0.3))' : 
                'linear-gradient(135deg, rgba(91, 173, 255, 0.5), rgba(186, 230, 253, 0.2))'};
            clip-path: polygon(50% 0%, 80% 30%, 100% 100%, 50% 85%, 0% 100%, 20% 30%);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            transform: rotate(${Math.random() * 360}deg);
            animation: shard-float ${Math.random() * 25 + 15}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            filter: blur(0.5px);
            opacity: ${Math.random() * 0.4 + 0.4};
            box-shadow: 0 0 20px ${isDeep ? 'rgba(99, 102, 241, 0.6)' : 'rgba(91, 173, 255, 0.5)'};
        `;
        container.appendChild(shard);
    }
}

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float-complex {
        0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.3;
        }
        25% {
            transform: translate(30px, -50px) scale(1.2) rotate(90deg);
            opacity: 0.8;
        }
        50% {
            transform: translate(-20px, -80px) scale(0.8) rotate(180deg);
            opacity: 1;
        }
        75% {
            transform: translate(40px, -60px) scale(1.1) rotate(270deg);
            opacity: 0.7;
        }
    }
    
    @keyframes shard-float {
        0% {
            transform: rotate(0deg) translateY(0) translateX(0);
            opacity: 0.4;
        }
        25% {
            transform: rotate(90deg) translateY(-30px) translateX(20px);
            opacity: 0.7;
        }
        50% {
            transform: rotate(180deg) translateY(-50px) translateX(-15px);
            opacity: 1;
        }
        75% {
            transform: rotate(270deg) translateY(-20px) translateX(25px);
            opacity: 0.6;
        }
        100% {
            transform: rotate(360deg) translateY(0) translateX(0);
            opacity: 0.4;
        }
    }
`;
document.head.appendChild(style);

// Enhanced Canvas with multiple crystal types
const canvas = document.getElementById('iceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class IceCrystal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.isCyan = Math.random() > 0.6;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulse = 0;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;
        
        if (this.y > canvas.height + 10) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
        
        if (this.x > canvas.width + 10) {
            this.x = -10;
        } else if (this.x < -10) {
            this.x = canvas.width + 10;
        }
    }
    
    draw() {
        const pulseSize = this.size + Math.sin(this.pulse) * 0.5;
        const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.2;
        
        // Main crystal
        if (this.isCyan) {
            ctx.fillStyle = `rgba(125, 211, 252, ${pulseOpacity})`;
            ctx.shadowColor = 'rgba(125, 211, 252, 0.9)';
        } else {
            ctx.fillStyle = `rgba(186, 230, 253, ${pulseOpacity})`;
            ctx.shadowColor = 'rgba(91, 173, 255, 0.9)';
        }
        
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Outer glow
        ctx.shadowBlur = 25;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

const crystals = [];
for (let i = 0; i < 150; i++) {
    crystals.push(new IceCrystal());
}

function animateCrystals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    crystals.forEach(crystal => {
        crystal.update();
        crystal.draw();
    });
    
    requestAnimationFrame(animateCrystals);
}

// ULTIMATE BUTTON - Epic Ice Burst
const ultimateBtn = document.getElementById('ultimateBtn');
let isUltimateActive = false;

ultimateBtn.addEventListener('click', () => {
    if (isUltimateActive) return;
    
    isUltimateActive = true;
    ultimateBtn.style.transform = 'scale(0.85)';
    
    // Epic visual effects
    createScreenFlash();
    createUltimateBurst();
    createMassiveShardExplosion();
    createIceWave();
    
    setTimeout(() => {
        ultimateBtn.style.transform = 'scale(1)';
        isUltimateActive = false;
    }, 2000);
});

function createScreenFlash() {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, 
            rgba(125, 211, 252, 0.8) 0%, 
            rgba(91, 173, 255, 0.5) 40%, 
            transparent 70%);
        pointer-events: none;
        z-index: 9999;
        animation: ultra-flash 1.5s ease-out;
    `;
    document.body.appendChild(flash);
    
    setTimeout(() => flash.remove(), 1500);
}

const flashStyle = document.createElement('style');
flashStyle.textContent = `
    @keyframes ultra-flash {
        0% { opacity: 0; transform: scale(0.5); }
        30% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(1.5); }
    }
`;
document.head.appendChild(flashStyle);

function createUltimateBurst() {
    const burstCount = 100;
    const rect = ultimateBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < burstCount; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / burstCount;
        const velocity = Math.random() * 8 + 5;
        const size = Math.random() * 10 + 3;
        const isCyan = Math.random() > 0.5;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${isCyan ? 
                'radial-gradient(circle, rgba(125, 211, 252, 1), rgba(91, 173, 255, 0.7))' :
                'radial-gradient(circle, rgba(186, 230, 253, 1), rgba(99, 102, 241, 0.7))'};
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 9998;
            box-shadow: 0 0 25px ${isCyan ? 'rgba(125, 211, 252, 1)' : 'rgba(91, 173, 255, 1)'};
        `;
        
        document.body.appendChild(particle);
        
        let x = 0, y = 0, opacity = 1, scale = 1;
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity;
            opacity -= 0.015;
            scale += 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

function createMassiveShardExplosion() {
    const shardCount = 40;
    const rect = ultimateBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < shardCount; i++) {
        const shard = document.createElement('div');
        const angle = (Math.PI * 2 * i) / shardCount;
        const velocity = Math.random() * 10 + 6;
        const size = Math.random() * 50 + 25;
        const isDeep = Math.random() > 0.5;
        
        shard.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size * 3}px;
            background: ${isDeep ?
                'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(91, 173, 255, 0.6))' :
                'linear-gradient(135deg, rgba(91, 173, 255, 0.9), rgba(186, 230, 253, 0.6))'};
            clip-path: polygon(50% 0%, 75% 25%, 100% 100%, 50% 90%, 0% 100%, 25% 25%);
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 9998;
            transform: rotate(${Math.random() * 360}deg);
            box-shadow: 0 0 30px ${isDeep ? 'rgba(99, 102, 241, 1)' : 'rgba(91, 173, 255, 1)'};
            filter: brightness(1.3);
        `;
        
        document.body.appendChild(shard);
        
        let x = 0, y = 0, opacity = 1, rotation = Math.random() * 360;
        const rotationSpeed = Math.random() * 10 + 5;
        
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity + 3;
            opacity -= 0.012;
            rotation += rotationSpeed;
            
            shard.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
            shard.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                shard.remove();
            }
        };
        
        animate();
    }
}

function createIceWave() {
    const waves = 3;
    const rect = ultimateBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let w = 0; w < waves; w++) {
        setTimeout(() => {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 0;
                height: 0;
                border: 3px solid rgba(125, 211, 252, 0.8);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 9997;
                box-shadow: 0 0 40px rgba(91, 173, 255, 0.8), inset 0 0 40px rgba(99, 102, 241, 0.5);
            `;
            
            document.body.appendChild(wave);
            
            let size = 0;
            let opacity = 0.8;
            
            const animate = () => {
                size += 15;
                opacity -= 0.01;
                
                wave.style.width = size + 'px';
                wave.style.height = size + 'px';
                wave.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    wave.remove();
                }
            };
            
            animate();
        }, w * 200);
    }
}

// Mouse trail with ice crystals
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (Math.random() < 0.15) {
        createMouseTrail(mouseX, mouseY);
    }
});

function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    const isCyan = Math.random() > 0.5;
    const size = Math.random() * 6 + 3;
    
    trail.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${isCyan ?
            'radial-gradient(circle, rgba(125, 211, 252, 0.9), rgba(91, 173, 255, 0.5))' :
            'radial-gradient(circle, rgba(186, 230, 253, 0.9), rgba(99, 102, 241, 0.5))'};
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9999;
        animation: trail-fade 1.5s ease-out;
        box-shadow: 0 0 15px ${isCyan ? 'rgba(125, 211, 252, 0.8)' : 'rgba(91, 173, 255, 0.8)'};
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1500);
}

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trail-fade {
        0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(trailStyle);

// Form submission with ice effect
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const successMsg = document.createElement('div');
    successMsg.textContent = '✉️ Pesan Terkirim!';
    successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2.5rem 4rem;
        background: linear-gradient(135deg, rgba(91, 173, 255, 0.95), rgba(125, 211, 252, 0.95));
        border: 3px solid rgba(186, 230, 253, 1);
        border-radius: 20px;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 0 60px rgba(91, 173, 255, 1);
        animation: popup 0.5s ease-out;
    `;
    
    document.body.appendChild(successMsg);
    
    // Add sparkles around message
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / 20;
            const distance = 100;
            
            sparkle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle, white, rgba(125, 211, 252, 0.5));
                border-radius: 50%;
                left: 50%;
                top: 50%;
                pointer-events: none;
                z-index: 10001;
                box-shadow: 0 0 15px rgba(91, 173, 255, 1);
            `;
            
            document.body.appendChild(sparkle);
            
            let dist = 0;
            const animate = () => {
                dist += 3;
                const x = Math.cos(angle) * dist;
                const y = Math.sin(angle) * dist;
                const opacity = 1 - (dist / distance);
                
                sparkle.style.transform = `translate(${x}px, ${y}px)`;
                sparkle.style.opacity = opacity;
                
                if (dist < distance) {
                    requestAnimationFrame(animate);
                } else {
                    sparkle.remove();
                }
            };
            
            animate();
        }, i * 30);
    }
    
    setTimeout(() => {
        successMsg.style.animation = 'popup 0.5s ease-out reverse';
        setTimeout(() => successMsg.remove(), 500);
    }, 2500);
    
    contactForm.reset();
});

const popupStyle = document.createElement('style');
popupStyle.textContent = `
    @keyframes popup {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(-180deg);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(popupStyle);

// Resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Card hover effects with ice
const cards = document.querySelectorAll('.skill-item, .experience-card, .project-card, .timeline-content');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        createCardIceEffect(this);
    });
});

function createCardIceEffect(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 3;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(186, 230, 253, 0.9), rgba(91, 173, 255, 0.5));
            border-radius: 50%;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            pointer-events: none;
            z-index: 9999;
            animation: card-sparkle 1s ease-out;
            box-shadow: 0 0 15px rgba(91, 173, 255, 0.8);
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

const cardStyle = document.createElement('style');
cardStyle.textContent = `
    @keyframes card-sparkle {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cardStyle);

// Initialize all effects
createIceParticles();
createIceShards();
animateCrystals();

// Scroll parallax for decorations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.crystal-formation');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
    });
});

console.log('❄️💎 Abyss Princess Ultimate Activated! 💎❄️');