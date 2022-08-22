
/**========================================================================
 * calculation parts
=========================================================================== */

document.getElementById('calculateBtn').addEventListener('click', function () {
    //per player buget value
    const playerBudgetValue = getInputValue('perPlayerInput')
    console.log(playerBudgetValue);

    const playerBugetTotal = playerBudgetValue * playerArray.length;

    // set the value in Player Expenses total
    setEliment('totalExpence', playerBugetTotal)
})

// total budget manager and coach.`

document.getElementById('totalCalculateBtn').addEventListener('click', function () {
    const playerBudgetValue = getInputValue('perPlayerInput')
    console.log(playerBudgetValue);

    const playerBugetTotal = playerBudgetValue * playerArray.length;

    const managerBudgetValue = getInputValue('managerInput')

    const coachBudgetValue = getInputValue('coachInput')

    // calculate total value
    const calculateTotalBudget = managerBudgetValue + coachBudgetValue + playerBugetTotal

    setEliment('totalCost', calculateTotalBudget)
})











