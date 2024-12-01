document.getElementById("friend-gift-btn").addEventListener("click", function() {
    const options = [
        "A handwritten letter or scrapbook of memories",
        "A Christmas jumper",
        "A gift card to their favorite store",
        "A warm scarf",
        "A plant for their room",
        "A scented candle with a relaxing fragrance",
        "A custom mug with a funny quote",
        "A fun board game",
        "Tickets to a musical or concert",
        "A cuddly toy",
    ];
    const result = document.getElementById("friend-result");
    result.textContent = options[Math.floor(Math.random() * options.length)];
    result.style.display = "block"; // Show the result
    this.style.display = "none";    // Hide the button
});

document.getElementById("side-dish-btn").addEventListener("click", function() {
    const options = [
        "Roast potatoes with rosemary and garlic",
        "Brussels sprouts with chestnuts and bacon",
        "Carrot and swede mash",
        "Cauliflower cheese",
        "Roast parsnips with honey and thyme",
        "Glazed carrots with brown sugar and butter",
        "Cranberry sauce with orange zest",
        "Pigs in blankets (sausages wrapped in bacon)"
    ];
    const result = document.getElementById("side-dish-result");
    result.textContent = options[Math.floor(Math.random() * options.length)];
    result.style.display = "block";
    this.style.display = "none";
});

document.getElementById("resolution-btn").addEventListener("click", function() {
    const options = [
        "Learn a new language",
        "Read a book each month",
        "Start a new fitness routine",
        "Declutter and organise your home",
        "Travel to a new country or city",
        "Volunteer for a cause",
        "Save more money",
        "Spend more time with family and friends",
        "Practice mindfulness or meditation",
        "Get more sleep",
        "Reduce screen time",
        "Start a side project or business",
        "Cook more meals at home",
        "Spend more time outdoors",
        "Take up journaling",
        "Focus on personal development",
        "Break a bad habit",
        "Focus on self-care",
        "Improve your work-life balance",
        "Learn to say no more often",

    ];
    const result = document.getElementById("resolution-result");
    result.textContent = options[Math.floor(Math.random() * options.length)];
    result.style.display = "block";
    this.style.display = "none";
});

document.getElementById("vacation-btn").addEventListener("click", function() {
    const options = [
        "A beach resort in the Caribbean",
        "A road trip across Japan",
        "A cultural tour of Europe (e.g., Italy, France)",
        "A hiking adventure in the Canadian Rocky Mountains",
        "A safari in Africa",
        "A visit to a historic city like Kyoto or Athens",
        "A luxury retreat in Bali or Thailand",
        "An adventurous trip to Iceland to see the Northern Lights",
        "A wellness retreat in a remote location",
        "A winter holiday in the Swiss Alps",
        "A writing retreat in Scandinavia",
        "A homestay in central Asia",
        "A culinary tour of South America",
        "A bus tour around Eastern Europe",
        "A hiking trip to Everest base camp",
        "A cruise through the Mediterranean",
    ];
    const result = document.getElementById("vacation-result");
    result.textContent = options[Math.floor(Math.random() * options.length)];
    result.style.display = "block";
    this.style.display = "none";
});

document.getElementById("word-btn").addEventListener("click", function() {
    const options = [
        "Resilience",
        "Gratitude",
        "Empowerment",
        "Joy",
        "Growth",
        "Peace",
        "Adventure",
        "Confidence",
        "Balance",
        "Creativity",
        "Hope",
        "Kindness",
        "Courage",
        "Clarity",
        "Abundance",
        "Harmony",
        "Focus",
        "Transformation",
        "Connection",
        "Mindfulness",
        "Expansion",

    ];
    const result = document.getElementById("word-result");
    result.textContent = options[Math.floor(Math.random() * options.length)];
    result.style.display = "block";
    this.style.display = "none";
});

document.getElementById("omikuji-button").addEventListener("click", function () {
    // Hide the description
    const omikujiDescription = document.getElementById("omikuji-description");
    omikujiDescription.style.display = "none";

    // Hide the button
    const omikujiButton = document.getElementById("omikuji-button");
    omikujiButton.style.display = "none";

    // Hide the header
    const omikujiHeader = document.querySelector(".omikuji-container h2");
    omikujiHeader.style.display = "none";

    // Show the result
    const omikujiResult = document.getElementById("omikuji-result");
    const fortunes = [
        "大吉 (Great blessing/great luck)", 
        "中吉 (Middle blessing/middle luck)", 
        "小吉 (Small blessing/small luck)", 
        "吉 (Blessing/luck)", 
        "半吉 (Half-blessing/half-luck)", 
        "末吉 (Future blessing/future luck)", 
        "末小吉 (Future small blessing/future small luck)", 
        "凶 (Curse/bad luck)", 
        "小凶 (Small curse/small bad luck)", 
        "半凶 (Half-curse/half-bad luck)", 
        "末凶 (Future curse/future bad luck)", 
        "大凶 (Great curse/great bad luck)"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    omikujiResult.textContent = randomFortune;
    omikujiResult.style.display = "block";

    // Add the fun message dynamically
    const omikujiContainer = document.querySelector(".omikuji-container");
    const funMessage = document.createElement("p"); // Create a new paragraph
    funMessage.textContent = "This is just for fun, please don't take this seriously.";
    funMessage.style.marginTop = "20px"; 
    funMessage.style.fontSize = "1.2rem"; 
    funMessage.style.fontStyle = "italic"
    funMessage.style.width = "80%"
    funMessage.style.color = "white"; 
    omikujiContainer.appendChild(funMessage); 
});


