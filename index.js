'use strict';

function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

var cssRuleColorize = function (css, opts) {
    css.eachRule(function(rule) {
        rule.insertAfter(rule.decls[rule.decls.length - 1], {
            prop: 'background-color',
            value: getRandomColor()
        });
    });
};

module.exports = cssRuleColorize;