function sendEmail(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:eyelayareayen@gmail.com?subject=Contact from ${fullName}&body=Name: ${fullName}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    document.getElementById('contactForm').reset();
}
