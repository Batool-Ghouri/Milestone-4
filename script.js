var _a;
var resumeGenerated = false; // Flag to check if the resume has been generated
function updateResume() {
    if (!resumeGenerated)
        return; // Do nothing if the resume hasn't been generated yet
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split('\n');
    var experience = document.getElementById('experience').value;
    var resumeHTML = "\n        <div class=\"resume\">\n            <h1 contenteditable=\"true\">".concat(name, "</h1>\n            <p contenteditable=\"true\">Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n            <p contenteditable=\"true\">Address: ").concat(address, "</p>\n            <h2>Education</h2>\n            <p contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n            <h2>Skills</h2>\n            <ul contenteditable=\"true\">\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n            <h2>Experience</h2>\n            <p contenteditable=\"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n        </div>\n    ");
    var resumeContainer = document.getElementById('resume-container');
    resumeContainer.innerHTML = resumeHTML;
}
// Attach event listener to the generate button
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission and clearing
    if (!resumeGenerated) {
        updateResume(); // Generate resume on first click
        resumeGenerated = true; // Set the flag to true
        // Attach event listeners for real-time updates after initial generation
        document.querySelectorAll('#name, #email, #phone, #address, #education, #skills, #experience').forEach(function (input) {
            input.addEventListener('input', updateResume);
        });
    }
});
