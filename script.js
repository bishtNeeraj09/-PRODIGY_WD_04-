// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Particle background
const bg = document.getElementById('background');

for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100 + 100}vh`;
  particle.style.animationDuration = `${5 + Math.random() * 10}s`;
  particle.style.width = particle.style.height = `${Math.random() * 5 + 3}px`;
  bg.appendChild(particle);
}