module.exports.absolute = function (number) {
    return (number >= 0) ? number : -number;
}

module.exports.greet = function (name) {
    return 'welcome ' + name + '!';
}

module.exports.getCurrencies = function (name) {
    return ['USD', 'INR', 'EURO'];
}