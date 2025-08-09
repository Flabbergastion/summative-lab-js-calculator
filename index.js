let calculationHistory = [] // Array to store calculation history

let a = 3
let b = 0

function addToHistory(calculation) {
    calculationHistory.push(calculation);
// Function for adding a calculation to the history
}

function displayHistory () {
    if (calculationHistory.length === 0) {
        return "No stored calculations.";
    } else {
        return "Calculation History:\n" + calculationHistory.join("\n");
    }
}

function add(a, b) {
    const result = a + b;
    addToHistory(`${a} + ${b} = ${result}`);
    // Calling function to add calculation to history
      console.log(result)
    // Logging the output of the function
    return result;
    // Function for addition
  
 } 

function subtract(a, b) {
    const result = a - b;
    addToHistory(`${a} - ${b} = ${result}`);
    // Calling function to add calculation to history
   console.log(result)
    // Logging the output of the function
    return result
    // Function for subtraction
    
}

function multiply(a, b) {
    const result = a * b;
    addToHistory(`${a} * ${b} = ${result}`);
    // Calling function to add calculation to history
    console.log(result)
    // Logging the output of the function
    return result
    // Function for multiplication
}

function divide(a, b) {
    const result = a / b;
   if (b === 0) {
   console.error ("Division by zero is not allowed")
   } else {
    addToHistory(`${a} / ${b} = ${result}`);
    // Calling function to add calculation to history
   console.log(result)
    return result
   }
    // Function for division with error log for division by zero
    
}


console.log(displayHistory());

