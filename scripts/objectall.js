document.getElementById('thorn').addEventListener('click', function () {
    const thorn = document.getElementById('thorn'); 
    const objectContainer = document.querySelector('.object'); 
    const message = document.getElementById('message'); 

    
    const { width, height } = thorn.getBoundingClientRect(); 
    for (let i = 0; i < 15; i++) { 
        const fragment = document.createElement('div');
        fragment.classList.add('fragment');

        const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`; 
        fragment.style.setProperty('--color', randomColor);

        fragment.style.setProperty('--x', Math.random() - 0.5);
        fragment.style.setProperty('--y', Math.random() - 0.5); 
        fragment.style.setProperty('--angle', Math.random()); 

        fragment.style.setProperty('--rand1', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand2', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand3', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand4', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand5', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand6', `${Math.random() * 20 - 10}%`);

        fragment.style.top = `${height / 2 - 40}px`; 
        fragment.style.left = `${width / 2 - 40}px`;

        thorn.appendChild(fragment);
    }

    if (objectContainer) {
        objectContainer.style.opacity = '0'; 
        objectContainer.style.visibility = 'hidden';
        objectContainer.style.transition = 'opacity 0.5s ease, visibility 0.5s ease'; 
    }

    setTimeout(() => {
        message.style.opacity = '1'; 
        message.style.visibility = 'visible';
        message.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    }, 1500); 
});
