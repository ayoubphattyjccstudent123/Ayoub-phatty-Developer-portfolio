// contact.js
// Handles WhatsApp integration for the contact form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact__form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // WhatsApp integration
        // Replace with your WhatsApp number (with country code, no + or spaces)
        const phoneNumber = '2207572269'; // Your WhatsApp number, formatted for wa.me
        const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');

        // --- EMAIL INTEGRATION ---
        // To send emails, you need a backend service (Node.js, PHP, etc.)
        // Frontend JavaScript cannot send emails directly for security reasons.
        // You can use services like EmailJS, Formspree, or your own backend API.
        // Example (EmailJS): https://www.emailjs.com/docs/examples/contact-form/
    });
});
