document.getElementById("calculateButton").onclick = function () {
    const weight = parseInt(document.getElementById("dogWeight").value);

    if (isNaN(weight) || weight <= 0) {
        document.getElementById("result").innerHTML = "Vul een geldig gewicht in.";
        document.querySelector(".result-table").style.display = "none"; // Verberg de tabel
        return;
    }

    // Berekeningen
    const dailySnoepjes = Math.ceil(weight / 10);
    const monthlySnoepjes = dailySnoepjes * 30;
    const daysPerPot = Math.floor(60 / dailySnoepjes);

    let subscriptionRecommendation;
    let subscriptionLink;
    if (daysPerPot > 30) {
        subscriptionRecommendation = "<strong>1 pot met levering om de 2 maanden</strong>";
        subscriptionLink = "https://www.bobiotics.nl/cart/add?id=1-pot-2-months";
    } else if (monthlySnoepjes <= 60) {
        subscriptionRecommendation = "<strong>1 pot met maandelijkse levering</strong>";
        subscriptionLink = "https://www.bobiotics.nl/cart/add?id=1-pot-monthly";
    } else {
        const potsPerTwoMonths = Math.ceil((2 * monthlySnoepjes) / 60);
        subscriptionRecommendation = `<strong>${potsPerTwoMonths} potten met levering om de 2 maanden</strong>`;
        subscriptionLink = `https://www.bobiotics.nl/cart/add?id=${potsPerTwoMonths}-pots-2-months`;
    }

    // Vul de tabel met gegevens
    document.getElementById("daily-need").textContent = `${dailySnoepjes} snoepjes per dag`;
    document.getElementById("monthly-need").textContent = `${monthlySnoepjes} snoepjes per maand`;
    document.getElementById("pot-days").textContent = `1 pot gaat ${daysPerPot} dagen mee`;

    // Maak een knop voor het toevoegen aan winkelwagen
    const recommendationCell = document.getElementById("subscription-recommendation");
    recommendationCell.innerHTML = `
        ${subscriptionRecommendation} <br>
        <button class="cart-button" onclick="window.open('${subscriptionLink}', '_blank')">Toevoegen aan winkelwagen</button>
    `;

    // Toon de tabel
    document.querySelector(".result-table").style.display = "table"; // Zorg dat de tabel zichtbaar is
 
};
