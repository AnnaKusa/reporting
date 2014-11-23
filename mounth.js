var today = new Date();
var month = today.getMonth();
var year = today.getFullYear();
var DAYS_OF_WEEK = 7;
var DAYS_ROWS = 6;

function clickLeft() {
    if(month === 0) {
        month=11;
        year--;
    } else {
        month--;
    }
    setMounth();
    setDays();
}

function clickRight() {
    if (month === 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    setMounth();
    setDays();
}

function setMounth() {
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    document.getElementById('mounth').innerHTML = '<p>'+monthNames[month]+', '+ year +'</p>';
}

function createDays() {
    for (var i = 0; i < DAYS_OF_WEEK * DAYS_ROWS; i++) {
        var container = document.createElement('div');
        container.id = i;
        document.getElementsByClassName('datas')[0].appendChild(container);
    }
}

function setDays() {
    var firstDay = new Date(year, month, 1).getDay() - 1;
    if (firstDay < 0) {
        firstDay += DAYS_OF_WEEK;
    }
    var daysOfMonth = new Date(year, month+1, 0).getDate();
    for (var i = 0; i < firstDay; i++) {
        nullDays(i);
    }
    for (var i = 0 ; i < daysOfMonth; i++) {
        document.getElementById(i + firstDay).innerHTML = '<p>' + (i + 1) + '</p>';
        document.getElementById(i + firstDay).className = 'Out_Bg';
        document.getElementById(i + firstDay).setAttribute('onmouseover', "Change_Class(document.getElementById(" + ( i + firstDay ) + "), 'Over_Bg')");
        document.getElementById(i + firstDay).setAttribute('onmouseout', "Change_Class(document.getElementById(" + ( i + firstDay ) + "), 'Out_Bg')") ;
    }
    for (var i = daysOfMonth + firstDay; i < DAYS_OF_WEEK * DAYS_ROWS; i++) {
        nullDays(i);
    }
}

function nullDays(i) {
    var x = document.getElementById(i);
    x.innerText = '';
    x.setAttribute('onmouseover', null);
    x.setAttribute('onmouseout', null);
    x.className = 'not_active';
}

function Change_Class(myElement, My_Class) {
    myElement.className = My_Class;
}
	
window.onload = function() {
    setMounth();
    createDays();
    setDays();
}

















//без глобальних змінних, чудо імен, кодконвеншн