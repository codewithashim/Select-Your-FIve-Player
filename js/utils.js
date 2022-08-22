/**========================================================================
 *  reuseable common functions
=========================================================================== */
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const inputString = getInput.value;
    const input = parseFloat(inputString);

    // document.getElementById(inputId).value = '';
    return input;
}

function getElementById(elimentId) {
    const getEiment = document.getElementById(elimentId);
    const Eliment = getEiment.innerText;
    return Eliment;
}

function setEliment(elimentId, newValue) {
    const setElimentValue = document.getElementById(elimentId);
    setElimentValue.innerText = newValue;
}

/**========================================================================
 * reuseable common functions end
=========================================================================== */