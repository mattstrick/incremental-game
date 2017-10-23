function init() {
    var button = $('input[name=clicker');
    var nutrients = window.nutrients = {
        amount: 0,
        base_click: 1
    }

    button.on('click', function() {
        nutrients.amount = nutrients.amount + nutrients.base_click;
        console.log('nutrients', nutrients.amount);
        $('.nutrients')[0].innerText = nutrients.amount;
    });
}
