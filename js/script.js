// First Calculator Functions (unchanged)

// Clear input field
function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
}

// Append numbers to the input field
function appendNumber(number) {
    let input = document.getElementById("input");
    input.value += number;
}

// Append operators to the input field
function appendOperator(operator) {
    let input = document.getElementById("input");
    input.value += operator;
}

// Evaluate the mathematical expression
function evaluateExpression() {
    let input = document.getElementById("input").value;
    try {
        let result = eval(input);
        document.getElementById("result").innerHTML = "Výsledek: " + result;
    } catch (e) {
        document.getElementById("result").innerHTML = "Chyba ve výpočtu";
    }
}

// Convert numbers between different bases
function convert(conversionType) {
    let input = document.getElementById("input").value;
    let result = "";

    switch (conversionType) {
        case 'binToDec':
            result = parseInt(input, 2);
            break;
        case 'decToBin':
            result = (Number(input)).toString(2);
            break;
        case 'hexToDec':
            result = parseInt(input, 16);
            break;
        case 'decToHex':
            result = (Number(input)).toString(16).toUpperCase();
            break;
        default:
            result = "Neplatná konverze";
    }

    document.getElementById("result").innerHTML = "Výsledek: " + result;
}

// Second Calculator Functions

// Calculate the area of different shapes
function calculateArea(shape) {
    let side = parseFloat(document.getElementById("side").value);
    let result = "";

    switch (shape) {
        case 'equilateralTriangle':
            if (!isNaN(side)) {
                result = `Obsah rovnostranného trojúhelníku (strana=${side}): ${Math.sqrt(3) / 4 * Math.pow(side, 2)}`;
            } else {
                result = "Neplatná hodnota";
            }
            break;
        case 'circle':
            if (!isNaN(side)) {
                let radius = side;
                result = `Obsah kruhu (rádius=${radius}): ${Math.PI * Math.pow(radius, 2)}`;
            } else {
                result = "Neplatná hodnota";
            }
            break;
        case 'square':
            if (!isNaN(side)) {
                let sideLength = side;
                result = `Obsah čtverce (strana=${sideLength}): ${Math.pow(sideLength, 2)}`;
            } else {
                result = "Neplatná hodnota";
            }
            break;
        default:
            result = "Neplatný tvar";
    }

    document.getElementById("geometryResult").innerHTML = result;
}

// Calculate the volume of different shapes
function calculateVolume(shape) {
    let side = parseFloat(document.getElementById("side").value);
    let result = "";

    switch (shape) {
        case 'sphere':
            if (!isNaN(side)) {
                let radius = side;
                result = `Objem koule (rádius=${radius}): ${(4 / 3) * Math.PI * Math.pow(radius, 3)}`;
            } else {
                result = "Neplatná hodnota";
            }
            break;
        case 'cube':
            if (!isNaN(side)) {
                let sideLength = side;
                result = `Objem krychle (strana=${sideLength}): ${Math.pow(sideLength, 3)}`;
            } else {
                result = "Neplatná hodnota";
            }
            break;
        default:
            result = "Neplatný tvar";
    }

    document.getElementById("geometryResult").innerHTML = result;
}
