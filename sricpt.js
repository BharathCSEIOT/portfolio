<script>
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('a');
    backToTopButton.href = "#hero";
    backToTopButton.classList.add('back-to-top');
    backToTopButton.textContent = '⬆';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Certificate Slider Logic
    let certSlideIndex = 0;

    function moveCertSlide(direction) {
        const slider = document.getElementById('certSlider');
        const items = slider.querySelectorAll('.cert-item');
        const total = items.length;
        
        // Calculate the new index
        certSlideIndex = (certSlideIndex + direction + total) % total;

        // Calculate the offset based on the new index and item width
        const itemWidth = items[0].offsetWidth;
        const gap = 20; // Corresponds to the 'gap' in your CSS
        const offset = -certSlideIndex * (itemWidth + gap);

        slider.style.transform = `translateX(${offset}px)`;
    }
</script>
