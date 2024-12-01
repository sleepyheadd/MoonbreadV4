var total = 0;

var perClick = 1;
var autoClick = 0;

function ChocClicked() {
    var choccros = document.getElementById("croissant");
    var choctext = document.getElementById("choctext");

    total += perClick;
    choctext.textContent = total;

    choccros.style = "transform: scale(1.1);"
    setTimeout(function () {
        choccros.style = "transform: scale(1);"
    }, 50);
}

var perClickCost = 50;
var perClickAmount = 1;
var perClickIncrement = 1;

function IncClick() {
    var perClickId = document.getElementById("perClick")

    if (total >= perClickCost) {
        total -= perClickCost;
        perClickCost = Math.round(1.2 * perClickCost);
        perClick += perClickIncrement;
        perClickAmount++;

        perClickId.textContent = "(" + perClickCost + ") +" + perClickIncrement + " Per Click";
        document.getElementById("perClickStat").textContent = perClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("perClickCount").textContent = perClickAmount;
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + perClickIncrement + " Per Click";
        }, 600);
    }
}

var autoClickCost = 100;
var autoClickAmount = 0;
var autoActivated = false;
var BakerIncrement = 1;

function IncAutoClick() {
    var autoClickId = document.getElementById("autoClick");

    if (total >= autoClickCost) {
        total -= autoClickCost;
        autoClickCost = Math.round(1.3 * autoClickCost);
        autoClick += BakerIncrement;
        autoClickAmount++;
        if (autoClick == BakerIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        autoClickId.textContent = "(" + autoClickCost + ") +" + BakerIncrement + " Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("IncAutoCount").textContent = autoClickAmount;
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            autoClickId.textContent = "(" + autoClickCost + ") +" + BakerIncrement + " Click Per Second";
        }, 600);
    }
}

var storeClickCost = 500;
var storeClickAmount = 0;
var StoreIncrement = 7;

function StoreAutoClick() {
    var storeClickId = document.getElementById("storeClick");

    if (total >= storeClickCost) {
        total -= storeClickCost;
        storeClickCost = Math.round(1.3 * storeClickCost);
        autoClick += StoreIncrement;
        storeClickAmount++;
        if (autoClick == StoreIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + storeClickCost + ") +" + StoreIncrement + " Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("StoreAutoCount").textContent = storeClickAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + storeClickCost + ") +" + StoreIncrement + " Clicks Per Second";
        }, 600);
    }
}

var factoryClickCost = 3200;
var factoryAmount = 0;
var factoryIncrement = 50;

function FactoryAutoClick() {
    var storeClickId = document.getElementById("factoryClick");

    if (total >= factoryClickCost) {
        total -= factoryClickCost;
        factoryClickCost = Math.round(1.3 * factoryClickCost);
        autoClick += factoryIncrement;
        factoryAmount++;
        if (autoClick == factoryIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + factoryClickCost + ") +" + factoryIncrement + " Clicks Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("FactoryAutoCount").textContent = factoryAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + factoryClickCost + ") +" + factoryIncrement + " Clicks Per Second";
        }, 600);
    }
}



var tempTotal = 0;
var flavorText = document.getElementById("croissantText");

var maxTotal = 0;

var croissantMessage = {
    0: "You have a dream of baking croissants...",
    1: "Hmm, a paltry amount of croissants. You can do better.",
    2: "Hmm, a paltry amount of croissants. You can do better.",
    3: "Hey, now this is a start! That's quite a few you got there bucko!",
    4: "So many crossaints!! Wow!!! I really do love croissants.",
    5: "Well, I think that's enough croissants. Congratulations, you've won!",
    6: "Okay now buddy. You did it. You're done. You can stop now.",
    7: "What. Why.",
    8: "You sicko. You keep going despite it all. And for what? Satisfaction? This is nothing.",
    9: "croissant."
}

function AutoClicker() {
    tempTotal += autoClick * 10
    //console.log(tempTotal);
    while (tempTotal >= 100) {
        tempTotal -= 100; total += 1;
    }
    document.getElementById("choctext").textContent = total;
    
    if (maxTotal < total) {
        maxTotal = total;
    }

    let maxTotalAdjusted = Math.floor(Math.pow(maxTotal, 0.2));

    document.getElementById("croissantText").innerText = croissantMessage[maxTotalAdjusted];
    if (maxTotalAdjusted >= 9) {
        var pElements = document.getElementsByTagName("p");
        for (var i = 0; i < pElements.length; i++) {
            pElements[i].textContent = "croissant.";
        }
        var pElements = document.getElementsByTagName("h1");
        for (var i = 0; i < pElements.length; i++) {
            pElements[i].textContent = "croissant.";
        }
    }

    setTimeout(function () {
        AutoClicker();
    }, 100);
}