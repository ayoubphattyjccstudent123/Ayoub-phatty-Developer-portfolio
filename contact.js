// contact.js
// Handles WhatsApp integration for the contact form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact__form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const number = document.getElementById('number').value.trim();
        const message = document.getElementById('message').value.trim();

        // WhatsApp integration
        // Replace with your WhatsApp number (with country code, no + or spaces)
        const phoneNumber = '2207572269'; // Your WhatsApp number, formatted for wa.me
        const text = encodeURIComponent(`Name: ${name}\nNumber: ${number}\nMessage: ${message}`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    });
});
