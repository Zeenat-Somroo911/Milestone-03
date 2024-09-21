document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form elements
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    // Check if all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Get values from form elements
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();
        const education = educationElement.value.trim();
        const experience = experienceElement.value.trim();
        const skills = skillsElement.value.trim();
        
        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
        `;
        
        // Display the resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing.");
        }
     
    } else {
        console.error("One or more form elements are missing.");
    }
});
