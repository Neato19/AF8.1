$(function () {
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    var WeekDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    
    var f = new Date();  //javascript
    
    var strDate = WeekDays[f.getDay()] + " - " + months[f.getMonth()] + " " + f.getDate() + ", " + f.getFullYear();
    $('footer span').last().text(f.getFullYear());
});