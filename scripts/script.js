// Function to create a typing effect
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
    const text = "Selamat datang di E-commerce kami!";
    const speed = 100; // Typing speed in milliseconds

    // Ensure the target element exists
    const targetElement = document.createElement("div");
    targetElement.id = "typingEffect";
    document.body.appendChild(targetElement);

    typeWriter("typingEffect", text, speed);
});