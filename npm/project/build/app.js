function displayNumber(e){var t=document.getElementById("placeholder");t.innerHTML=e}!function(e){"use strict";function t(e){this.sides=e}t.prototype.roll=function(){var e=Math.floor(Math.random()*this.sides)+1;return e},"undefined"!=typeof module&&module.exports?module.exports=t:e.Dice=t}(this);var dice=new Dice(6),button=document.getElementById("button");button.onclick=function(){var e=dice.roll();displayNumber(e)};