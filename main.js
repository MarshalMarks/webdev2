////////////////////////////////////////////
//         Setup and Boilerplate          //
////////////////////////////////////////////

// select html elements
const cookieCountDisplay = document.getElementById("cookie-count-display");
const mainButton = document.getElementById("main-button");
const upgradeCostDisplay = document.getElementById("upgrade-cost-display");
const upgradeButton = document.getElementById("upgrade-button");

// declare variables
let cookieCount = 0;
let clickStrength = 1;
let upgradeCost = 10;
const upgradeFactor = 3;

// change cookieCount by parameter and update display text
function incrementCookieCount(number) {
    cookieCount += number;
    cookieCountDisplay.textContent = "Cookies: " + cookieCount;
}

// upgrade click strength and update all relevant values
function upgrade() {
    clickStrength++;
    incrementCookieCount(-upgradeCost);
    upgradeCost *= upgradeFactor;
    upgradeCostDisplay.textContent = "Upgrade cost: " + upgradeCost;
    mainButton.textContent = "Click for " + clickStrength + " cookies!"
}

////////////////////////////////////////////
//         Button Event Listeners         //
////////////////////////////////////////////

mainButton.addEventListener("click", function() {
    incrementCookieCount(clickStrength);
});

upgradeButton.addEventListener("click", function() {
    // if the player can't afford the upgrade, break out of the function
    if(cookieCount < upgradeCost) { return; }
    // otherwise
    upgrade();
});

