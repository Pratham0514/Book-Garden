    const numDots = 14;
    const dots = [];

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('trail');
      document.body.appendChild(dot);
      dots.push({
        element: dot,
        x: 0,
        y: 0
      });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      let x = mouseX;
      let y = mouseY;

      dots.forEach((dot, index) => {
        dot.x += (x - dot.x) * 0.3;
        dot.y += (y - dot.y) * 0.3;
        dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
        x = dot.x;
        y = dot.y;
      });

      requestAnimationFrame(animate);
    }

    animate();