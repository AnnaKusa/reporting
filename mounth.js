var today = new Date();
var day = today.getDate();
var month = today.getMonth(); //January is 0!
var year = today.getFullYear();

function clickLeft() {
	if(month===0) {
		month=11;
		year--;
	} else {
		month--;
	}
setMounth();
}

function clickRight() {
	if(month===11) {
		month=0;
		year++;
	} else {
		month++;
	}
	setMounth();
}

function setMounth(){
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
document.getElementById('mounth').innerHTML = '<p>'+monthNames[month]+', '+ year +'</p>';
}

function createDatas() {
for(var i=0; i<42; i++) {
	var container = document.createElement('div');
	document.getElementById('datas').appendChild(container);
}
}
	


window.onload = function() {

setMounth();
createDatas();



}