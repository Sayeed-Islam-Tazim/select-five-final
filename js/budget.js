document
    .getElementById("calculate-button")
    .addEventListener("click", function () {
        const perPlayerPriceString =
            document.getElementById("per-player-price").value;
        const perPlayerPrice = parseInt(perPlayerPriceString);

        const selectedPlayers = document.getElementById('selected-player-list');

        const totalPlayerPrice = perPlayerPrice * selectedPlayers.childNodes.length;
        const playerExpensesField = document.getElementById(
            "player-expenses-total"
        );
        playerExpensesField.innerText = totalPlayerPrice;
    });

document
    .getElementById("calculate-total-button")
    .addEventListener("click", function () {
        const perPlayerPriceString =
            document.getElementById("per-player-price").value;
        const perPlayerPrice = parseInt(perPlayerPriceString);

        const selectedPlayers = document.getElementById('selected-player-list');

        const totalPlayerPrice = perPlayerPrice * selectedPlayers.childNodes.length;
        console.log(totalPlayerPrice);

        const managerPriceField = document.getElementById("manager-price");
        const managerPriceString = managerPriceField.value;
        const managerPrice = parseInt(managerPriceString);

        const coachPriceField = document.getElementById("coach-price");
        const coachPriceString = coachPriceField.value;
        const coachPrice = parseInt(coachPriceString);

        const subTotalPrice = totalPlayerPrice + managerPrice + coachPrice;
        const calculateTotal = document.getElementById("calculate-total");
        calculateTotal.innerText = subTotalPrice;
    });
