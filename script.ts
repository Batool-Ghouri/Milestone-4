let resumeGenerated = false; // Flag to check if the resume has been generated

function updateResume() {
    if (!resumeGenerated) return; // Do nothing if the resume hasn't been generated yet

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const resumeHTML = `
        <div class="resume">
            <h1 contenteditable="true">${name}</h1>
            <p contenteditable="true">Email: ${email} | Phone: ${phone}</p>
            <p contenteditable="true">Address: ${address}</p>
            <h2>Education</h2>
            <p contenteditable="true">${education.replace(/\n/g, '<br>')}</p>
            <h2>Skills</h2>
            <ul contenteditable="true">
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
            <h2>Experience</h2>
            <p contenteditable="true">${experience.replace(/\n/g, '<br>')}</p>
        </div>
    `;

    const resumeContainer = document.getElementById('resume-container') as HTMLDivElement;
    resumeContainer.innerHTML = resumeHTML;
}

// Attach event listener to the generate button
document.getElementById('generate')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission and clearing

    if (!resumeGenerated) {
        updateResume(); // Generate resume on first click
        resumeGenerated = true; // Set the flag to true
        
        // Attach event listeners for real-time updates after initial generation
        document.querySelectorAll('#name, #email, #phone, #address, #education, #skills, #experience').forEach(input => {
            input.addEventListener('input', updateResume);
        });
    }
});
