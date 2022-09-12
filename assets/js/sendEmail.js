function sendMail(contactForm) {
    emailjs.send("service_xu4frni", "template_ac3hquo", {
        'from_name': contactForm.name.value, // Using the name tag from the html, not the ID tag?
        'from_email': contactForm.emailaddress.value,
        'message': contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}