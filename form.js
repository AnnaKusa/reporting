var reportNumbers=0;
var reportID=0;

function openReporting(number) {
    var report = document.createElement('div');
    report.className = 'report';
    var body = document.getElementsByTagName('body')[0];
    report.innerHTML = '<h2>' + number + ' ' + monthNames[month] + ', ' + year + '</h2>';
    var img = createClose();
    // todo: change close to jquery
    img.addEventListener('click', function (){ closeMainForm ()});
    report.appendChild(img);
    body.appendChild(report);
    var reportForm = createReportForm();
    document.getElementsByClassName('report')[0].appendChild(reportForm);
    reportNumbers++;
    reportID++;
    fillReportForm(reportNumbers);
    var addForm = createPlus();
    report.appendChild(addForm);
}

function closeMainForm() {
    ( ".report" ).remove();
}

function closeReportForm(rf) {
    if (confirm('Are you sure?')) {
        $('#'+rf.toString()).remove();
        reportNumbers--;
    }
}

function createClose() {
    var img = document.createElement('img');
    img.src = 'images/icon_close.png';
    img.className = 'closeImg';
    return img;
}

function newReport() {
    document.getElementsByClassName('add_form').remove();
    var reportForm = createReportForm();
    document.getElementsByClassName('report')[0].appendChild(reportForm);
    reportNumbers++;
    reportID++;
    fillReportForm(reportNumbers);
    var addForm = createPlus();
    document.getElementsByClassName('report')[0].appendChild(addForm);
}

HTMLCollection.prototype.remove = function () {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function createReportForm() {
    var reportForm = document.createElement('form');
    reportForm.className = 'reportForm';
    reportForm.id= 'reportForm'+reportID;

    var closeRF = createClose();
    closeRF.addEventListener('click', function () { closeReportForm(reportForm.id) });
    reportForm.appendChild(closeRF);

    var selectCategory = document.createElement('div');
    selectCategory.className = 'input_categories';
    selectCategory.innerHTML = '<span> Category: </span>';
    var categories = createOption();
    selectCategory.appendChild(categories);
    reportForm.appendChild(selectCategory);
    return reportForm;
}

function fillReportForm(numbers)
{
    var selTime = document.createElement('div');
    selTime.innerHTML = '<span> start </span>';
    var inputHHStart = document.createElement('input');
    inputHHStart.type = 'text';
    inputHHStart.className += 'time_input';
    selTime.appendChild(inputHHStart);
    var $tbody = $('.reportForm').eq(numbers-1);
    $tbody.append(selTime);
   // selTime.appendTo('.reportForm');
    $('.time_input').ptTimeSelect({
        setButtonLabel: "Select"
    });
}

function createPlus() {
    var addForm = document.createElement('div');
    addForm.className = 'add_form';
    var imgPlus = document.createElement('img');
    imgPlus.src = 'images/plus.png';
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
    inputHHStart.className += 'time_input';
    $('.time_input').ptTimeSelect();
    selTime.appendChild(inputHHStart);
    return inputHHStart;
}