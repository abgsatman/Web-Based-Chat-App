// JavaScript Document
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function zamanFonk() {
	var d = new Date();
	var x = document.getElementById("demo");
	
	var h = addZero(d.getHours());
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var son = h + ":" + m + ":" + s;
	//document.getElementById("zaman").innerHTML = son;
	return son;
}