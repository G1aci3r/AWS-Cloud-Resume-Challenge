// JavaScript Code

document.addEventListener('DOMContentLoaded', async function() {
    const counter = document.querySelector(".counter-number");
    async function updateCounter() {
        try {
            let response = await fetch("https://3xxjnxaa34c5da2rtyjyz4pq4u0enuvc.lambda-url.us-east-1.on.aws/");
            let data = await response.json();
            counter.innerHTML = `Views: ${data}`;
        } catch (error) {
            console.error('Error fetching web view counter:', error);
            counter.innerHTML = 'Error loading counter';
        }
    }
    updateCounter();
});
