document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inspectionForm');
    if (!form) {
        console.error('❌ Form not found!');
        return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfJNx2thU1b6ssNkkcjf1AwLfai1JEord9UpvvFl0-rdrBGKKj_O0caUFfIU_US6MeIQ/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('✅ Form submitted successfully!');
                form.reset();
            } else {
                alert('❌ Submission failed: ' + response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('⚠️ Network or server error.');
        }
    });
});

// Navigation (next/prev sections)
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
                    input.reportValidity();
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
