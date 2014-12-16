var today = new Date();
var month = today.getMonth();
var year = today.getFullYear();
var DAYS_OF_WEEK = 7;
var DAYS_ROWS = 6;
var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

function clickLeft() {
    if(month === 0) {
        month=11;
        year--;
    } else {
        month--;
    }
    setMonth();
    setDays();
}

function clickRight() {
    if (month === 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    setMonth();
    setDays();
}

function setMonth() {
    document.getElementById('month').innerHTML = '<span class="cell">' + monthNames[month] + ', ' + year + '</span>';
}

function createDays() {
    for (var i = 0; i < DAYS_OF_WEEK * DAYS_ROWS; i++) {
        var container = document.createElement('div');
        container.id = i;
        document.getElementsByClassName('data')[0].appendChild(container);
    }
}

function setDays() {
    var firstDay = new Date(year, month, 1).getDay();
    var daysOfMonth = new Date(year, month + 1, 0).getDate();
    (firstDay === 0) ? firstDay += 7 : firstDay;
    for (var i = 0; i < firstDay; i++) {
        nullDays(i);
    }
    for (i = 0 ; i < daysOfMonth; i++) {
        document.getElementById(i + firstDay).innerHTML = '<span class="cell">' + (i + 1) + '</span>';
        document.getElementById(i + firstDay).className = 'active';
        document.getElementById(i + firstDay).setAttribute('onclick', "openReporting(" + (i + 1) + ")");
      //  document.getElementById(i + firstDay).addEventListener('click', function () { openReporting(this.id - firstDay + 1) }, false);

    }
    for ( i = daysOfMonth + firstDay; i < DAYS_OF_WEEK * DAYS_ROWS; i++) {
        nullDays(i);
    }
}

function nullDays(i) {
    var x = document.getElementById(i);
    x.innerText = '';
    x.className = 'not_active';
    x.onclick = null;
}
	
window.onload = function() {
    setMonth();
    createDays();
    setDays();
};