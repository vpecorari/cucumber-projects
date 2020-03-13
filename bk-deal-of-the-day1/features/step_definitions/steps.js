const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function mcOfertaDoDia(weekday) {
    switch (weekday) {
        case 'monday':
            return 'King Supreme'
        case 'tuesday':
            return 'Chicken Sandwich'
        case 'wednesday':
            return 'Whooper'
        case 'thursday':
            return 'Double Stacker'
        case 'friday':
            return 'Big Fish'
        case 'saturday':
            return 'Double Cheeseburger'
        case 'sunday':
            return 'Double Whooper Jr'
    }
}

Given('today is {string}', function (weekday) {
    this.today = weekday;
});

When('I ask what is the BK deal of today', function () {
    this.actualAnswer = mcOfertaDoDia(this.today)
});

Then('the awnser must be {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});