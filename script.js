const facts = [
    "HTML is the standard markup language for Web pages.",
    "CSS is used to style and layout web pages (colors, fonts, layout).",
    "JavaScript adds interactive behavior and logic to web pages.",
    "Git is a tool used to track changes in your code."
];

let currentIndex = 0;

function nextFact() {
    currentIndex = (currentIndex + 1) % facts.length;
    document.getElementById('fact').innerText = facts[currentIndex];
}
