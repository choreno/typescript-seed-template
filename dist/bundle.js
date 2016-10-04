(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="../typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    $('#content').html('hello jquery2');
});
var TestClass = (function () {
    function TestClass(idArg) {
        this.id = idArg;
    }
    return TestClass;
}());
var tt = new TestClass(2);
console.log(tt.id);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLHFEQUFxRDtBQUlyRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUVGO0lBR0ksbUJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQUVELElBQUksRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCk9PntcclxuICAgICQoJyNjb250ZW50JykuaHRtbCgnaGVsbG8ganF1ZXJ5MicpO1xyXG59KVxyXG5cclxuY2xhc3MgVGVzdENsYXNze1xyXG5cclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgY29uc3RydWN0b3IoaWRBcmc6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmlkID0gaWRBcmc7IFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxudmFyIHR0ID0gbmV3IFRlc3RDbGFzcygyKTsgXHJcbmNvbnNvbGUubG9nKHR0LmlkKTtcclxuXHJcbiJdfQ==
