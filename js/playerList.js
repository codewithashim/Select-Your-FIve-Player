/**========================================================================
 *  button parts
=========================================================================== */

let playerArray = []

function addPlayer(eliment) {
    const playerName = eliment.parentNode.children[0].innerText;
    const totalPlayerObj = {
        playerName: playerName,
    }
    if (playerArray.length <= 4) {
        playerArray.push(totalPlayerObj);
        eliment.setAttribute('disabled', true);
    } else {
        alert("you can't select more than 5 players !!❌❌");
    }
    document.getElementById("selectedPlayers").innerText = playerArray.length;
    displayPlayers(playerArray)
}

function displayPlayers(playerList) {
    const playerUlEliments = document.getElementById("playerListUl");
    playerUlEliments.innerHTML = "";

    for (let i = 0; i < playerList.length; i++) {
        const playerName = playerArray[i].playerName;

        const playerList = document.createElement("li")
        playerList.innerHTML = `
            <li id="player-name" class="list-group-item m-2 font-bold text-white"><span id="player-number">${i + 1}. </span> ${playerName}</li>
        `
        playerUlEliments.appendChild(playerList)
    }
}
