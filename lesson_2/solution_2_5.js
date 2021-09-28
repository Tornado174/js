function mathOperation (arg1, arg2, operation) {
    function sum(a, b) {
        return a + b
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
    switch (operation) {
        case "+":
            return sum(arg1, arg2)
        case "-":
            return sub(arg1, arg2)
        case "*":
            return mul(arg1, arg2)
        case "/":
            return div(arg1, arg2)
    }
}


alert(mathOperation(4, 5, "+"))
alert(mathOperation(4, 3, "-"))
alert(mathOperation(4, 8, "*"))
alert(mathOperation(4, 0, "/"))
