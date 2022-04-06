var intervalID;
function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
        pe = "PM"
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Satrday"];
    var ids = ["dayname", "month", "danum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], month[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe]

    ids.forEach((element, i) => {
        document.getElementById(element).firstChild.nodeValue = values[i]
    });

}

function initClock(isOnlySet) {
    updateClock();
    if(!isOnlySet)
    intervalID = setInterval("updateClock()", 1)

}

function onStopClock() {
    clearInterval(intervalID);

}




