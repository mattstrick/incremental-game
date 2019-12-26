var counters = {
  nutrients: (window.nutrients = {
    amount: 100,
    base_click: 1,
    downsides: [
      {
        type: "air",
        base_change: -1
      }
    ]
  }),

  power: (window.power = {
    amount: 0,
    base_click: 1,
    downsides: [
      {
        type: "air",
        base_change: -1
      }
    ]
  }),
  air: (window.air = {
    amount: 1000,
    base_click: 1
  })
};

var martians = {}

var items = {

    1 = {
        name: purifier,
        base_click: 1,
        type: "air"
    }
}

var upgrades = {
  air_click_upgrade_1: {
    min_needed: 10,
    base_multiplier: 2,
    on: false
  }
};

function init() {
  var nutrientsBtn = $("input[name=nutrientsBtn");
  var powerBtn = $("input[name=powerBtn");
  var airBtn = $("input[name=airBtn");

  nutrientsBtn.on("click", function() {
    updateAmountOnClick("nutrients");
  });

  powerBtn.on("click", function() {
    updateAmountOnClick("power");
  });

  airBtn.on("click", function() {
    updateAmountOnClick("air");
  });

  initializeAmounts(["nutrients", "power", "air"]);
  initializeItems();
}

function initializeItems()

function initializeAmounts(typesArray) {
  typesArray.forEach(type => {
    $(`.${type}`)[0].innerText = counters[type].amount;
  });
}

function updateAmountOnClick(type) {
  if (window[type]) {
    console.log(counters[type].amount);
    console.log(counters[type].base_click);
    counters[type].amount = counters[type].amount + counters[type].base_click;
    $(`.${type}`)[0].innerText = counters[type].amount;
    if (counters[type].downsides) {
      counters[type].downsides.forEach(downside => {
        handleDownside(downside.type, downside.base_change);
      });
    }
  } else console.error(`could not connect ${type}`);
}

function handleDownside(type, changeAmount) {
  console.log("type", type);
  console.log("changeAmount", changeAmount);
  if (window[type]) {
    counters[type].amount = counters[type].amount + changeAmount;
    $(`.${type}`)[0].innerText = counters[type].amount;
  } else console.error(`could not connect ${type}`);
}
