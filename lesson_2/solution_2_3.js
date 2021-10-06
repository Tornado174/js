let a = -5;
let b = 6;

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert(a + b);
} else {alert("Error")}