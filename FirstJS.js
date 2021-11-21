var a, b, c = 0,
    mn = new Date().getTime(),
    bo = true,
    d, hrs, mins, secs, rem;

function func(g) {
    if (g < 10) {
        return "0" + g;
    }
    return g;
}

function funci(g) {
    if (g < 10) {
        return "00" + g;
    } else if (g < 100) {
        return "0" + g;
    }
    return g;
}

function meth(eve) {
    window.clearInterval(d);
    if (c == 0) {
        a = new Date().getTime();

    }

    if (bo == true) {
        if (c != 0) {
            b = new Date().getTime();
            a = a + (b - mn);
        }
        d = window.setInterval(function() {

            b = new Date().getTime();
            c = b - a;
            hrs = Math.floor(c / 3.6e+6);
            rem = c % 3.6e+6;
            mins = Math.floor(rem / 60000);
            rem = rem % 60000;
            secs = Math.floor(rem / 1000);
            rem = rem % 1000;
            document.getElementById("tim").innerHTML = func(hrs) + ":" + func(mins) + ":" + func(secs) + ":" + funci(rem);
        }, 10);
        bo = false;
    } else {
        mn = new Date().getTime();;
        window.clearInterval(d);
        bo = true;
    }
    c = 1;
}

function methi(eve) {
    if (bo == true) {
        document.getElementById("tim").innerHTML = "00:00:00:000";
    }
    a = new Date().getTime();
    c = 0;
}
document.getElementById("stsp").addEventListener("click", meth);
document.getElementById("rs").addEventListener("click", methi);