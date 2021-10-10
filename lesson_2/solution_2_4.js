function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    if (b === 0) {
        return "На ноль делить нельзя"
    } else if (b !== 0) {
        return a / b
    } else {
        return "Error"
    }
}


alert(sum(5, 6))
alert(sub(4, 9))
alert(mul(3, 7))
alert(div(6, 0))
