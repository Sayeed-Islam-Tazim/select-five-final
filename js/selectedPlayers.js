function getSelectedPlayerById(selectButton, playerName) {
    document.getElementById(selectButton).addEventListener('click', function () {
        const playerNameField = document.getElementById(playerName);
        const playerNameString = playerNameField.innerText;

        const selectedPlayers = document.getElementById('selected-player-list');

        if (selectedPlayers.childNodes.length <= 4) {
            const li = document.createElement('li');
            li.innerText = playerNameString;
            selectedPlayers.appendChild(li);
            document.getElementById(selectButton).disabled = true;
        } else {
            alert("you have already added 5 players");
        }
    })
}

getSelectedPlayerById('select-button-1', 'player-name-1')
getSelectedPlayerById('select-button-2', 'player-name-2')
getSelectedPlayerById('select-button-3', 'player-name-3')
getSelectedPlayerById('select-button-4', 'player-name-4')
getSelectedPlayerById('select-button-5', 'player-name-5')
getSelectedPlayerById('select-button-6', 'player-name-6')
getSelectedPlayerById('select-button-7', 'player-name-7')
getSelectedPlayerById('select-button-8', 'player-name-8')
getSelectedPlayerById('select-button-9', 'player-name-9')

