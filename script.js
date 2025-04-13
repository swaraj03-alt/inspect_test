
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.form-section');
    let current = 0;

    function showSection(index) {
        sections.forEach((sec, i) => {
            sec.classList.toggle('active', i === index);
        });
    }

    showSection(current);

    document.querySelectorAll('.next-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentSection = sections[current];
            const inputs = currentSection.querySelectorAll('input, select, textarea');
            for (let input of inputs) {
                if (!input.checkValidity()) {
                    input.reportValidity(); // Show native browser message
                    return;
                }
            }
            if (current < sections.length - 1) current++;
            showSection(current);
        });
    });

    document.querySelectorAll('.prev-button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (current > 0) current--;
            showSection(current);
        });
    });
});
