document.addEventListener("DOMContentLoaded", function () {
    
    // Theme toggle button handling and icon switching
    const toggleBtn = document.getElementById("themeToggle");

    function updateToggleIcon() {
        if (!toggleBtn) return;
        const isDark = document.body.classList.contains("dark");
        toggleBtn.textContent = isDark ? '☀' : '☾';
        toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    function applyStoredTheme() {
        if (localStorage.getItem("mode") === "dark") {
            document.body.classList.add("dark");
        }
        updateToggleIcon();
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark');
            localStorage.setItem('mode', document.body.classList.contains('dark') ? 'dark' : 'light');
            updateToggleIcon();
        });
    }

    applyStoredTheme();
    // Basic client-side contact form handling (optional)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = contactForm.elements['name'].value;
            alert('Thanks, ' + (name || 'there') + '! Your message has been received.');
            contactForm.reset();
        });
    }

});
