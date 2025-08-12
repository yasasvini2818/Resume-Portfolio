// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").replace(".html", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = this.getAttribute("href");
        }
    });
});

// Confirmation for the Contact Form
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset(); // Clear the form after submission
    });
}
