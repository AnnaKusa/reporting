var today = new Date();
var month = today.getMonth();
var year = today.getFullYear();
var DAYS_OF_WEEK = 7;
var DAYS_ROWS = 6;
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
    document.getElementById('mounth').innerHTML = '<span class="cell">' + monthNames[month] + ', ' + year + '</span>';
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
    for (var i = 0 ; i < daysOfMonth; i++) {
        document.getElementById(i + firstDay).innerHTML = '<span class="cell">' + (i + 1) + '</span>';
        document.getElementById(i + firstDay).className = 'active';
        document.getElementById(i + firstDay).setAttribute('onclick', "openReporting(" + (i + 1) + ")");
      //  document.getElementById(i + firstDay).addEventListener('click', function () { openReporting(this.id - firstDay + 1) }, false);

    }
    for (var i = daysOfMonth + firstDay; i < DAYS_OF_WEEK * DAYS_ROWS; i++) {
        nullDays(i);
    }
}

function nullDays(i) {
    var x = document.getElementById(i);
    x.innerText = '';
    x.className = 'not_active';
    x.onclick = false;
}
	
window.onload = function() {
    setMounth();
    createDays();
    setDays();
}

function openReporting(number) {
    var report = document.createElement('div');
    report.className = 'report';
    body = document.getElementsByTagName('body')[0];
    report.innerHTML = '<h2>' + number + ' ' + monthNames[month] + ', ' + year + '</h2>';
    var img = createClose();
    img.addEventListener('click', function (){ close (report)});
    report.appendChild(img);
    var reportForm = createReportForm();
    var addForm = createPlus();
    report.appendChild(reportForm);
    report.appendChild(addForm);
    body.appendChild(report);
}

function close(smt) {
    smt.remove();
}

function closeReportForm(rf) {
    if (confirm('Are you sure?')) {
        rf.remove();
    } 
}

function createClose() {
    var img = document.createElement('img');
    img.src = 'icon_close.png';
    img.className = 'closeImg';
    return img;
}

function newReport() {
    console.log('new report created');
    document.getElementsByClassName('add_form').remove();
    var reportForm = createReportForm();

    var addForm = createPlus();

    document.getElementsByClassName('report')[0].appendChild(reportForm);
    document.getElementsByClassName('report')[0].appendChild(addForm);
}

HTMLCollection.prototype.remove = function () {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function createReportForm() {
    var reportForm = document.createElement('div');
    reportForm.className = 'reportForm';
    var closeRF = createClose();
    closeRF.addEventListener('click', function () { closeReportForm(reportForm) });
    var selCat = document.createElement('div');
    selCat.className = 'input_categories';
    selCat.innerHTML = '<span> Category: </span>';
    var categories = createOption();
    selCat.appendChild(categories);
    reportForm.appendChild(selCat);

    var selTimeB = createTime('Start time: &nbsp&nbsp');
    selTimeB.className = 'input_categories';
    var select = document.createElement('select');
    var opt = document.createElement('option');
    opt.value = 'AM';
    opt.innerHTML = 'AM';
    select.appendChild(opt);
    var opt = document.createElement('option');
    opt.value = 'PM';
    opt.innerHTML = 'PM';
    select.appendChild(opt);
    selTimeB.appendChild(select);
    selTimeB.innerHTML += '<label> AM|PM </label>';
    reportForm.appendChild(selTimeB);

    var selTimeD = createTime('Duration:&nbsp&nbsp&nbsp ');
    selTimeD.className = 'input_categories';
    reportForm.appendChild(selTimeD); 

    reportForm.appendChild(closeRF);
    return reportForm;
}

function createPlus() {
    var addForm = document.createElement('div');
    addForm.className = 'add_form';
    var imgPlus = document.createElement('img');
    imgPlus.src = 'plus.png';
    imgPlus.className = 'plus_img';
    imgPlus.addEventListener('click', newReport);
    addForm.appendChild(imgPlus);
    return addForm;
}

function createOption() {
    var array = ['reading', 'coding C#', 'coding JavaScript', 'films', 'meeting', 'lecture'];
    var select = document.createElement('select');
    for (var i=0; i<6; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = array[i];
        select.appendChild(opt);
    }
    return select;
}

function createTime(title) {
    var selTime = document.createElement('div');
    selTime.innerHTML = '<span>'+title + '</span>';
    var inputHHStart = document.createElement('input');
    inputHHStart.type = 'text';
    inputHHStart.maxLength = '2';
    inputHHStart.size = '2';
    selTime.appendChild(inputHHStart);
    selTime.innerHTML += '<label> HH </label>';
    var inputMMStart = document.createElement('input');
    inputMMStart.type = 'text';
    inputMMStart.maxLength = '2';
    inputMMStart.size = '2';
    selTime.appendChild(inputMMStart);
    selTime.innerHTML += '<label> MM </label>';
    return selTime;
}