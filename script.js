function solveQuadratic() {
  // Get the values of a, b, and c from the input fields
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  // Calculate discriminant
  let discriminant = b * b - 4 * a * c;

  // Display discriminant
  document.getElementById("discriminant").innerHTML = 
    `D = ${b}<sup>2</sup> - 4(${a})(${c}) = ${discriminant}`;

  // Determine number of roots
  let rootMessage = "";
  if (discriminant > 0) {
    rootMessage = "this equation has 2 real roots.";
  } else if (discriminant === 0) {
    rootMessage = "this equation has 1 real root.";
  } else {
    rootMessage = "this equation has no real roots.";
  }
  document.getElementById("findRealRoots").innerHTML = rootMessage;

  // Calculate roots using quadratic formula
  if (discriminant >= 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.getElementById("quadFormula1").innerHTML = 
      ` = ${root1.toFixed(2)}`;
    document.getElementById("quadFormula2").innerHTML = 
      ` = ${root2.toFixed(2)}`;
  } else {
    document.getElementById("quadFormula1").innerHTML = 
      " = No real solution";
    document.getElementById("quadFormula2").innerHTML = 
      " = No real solution";
  }
  
  // Display results in text box
  let resultMessage = `Discriminant: ${discriminant}\n`;
  resultMessage += rootMessage + "\n";
  if (discriminant >= 0) {
    resultMessage += `Root 1: ${(-b + Math.sqrt(discriminant)) / (2 * a).toFixed(2)}\n`;
    resultMessage += `Root 2: ${(-b - Math.sqrt(discriminant)) / (2 * a).toFixed(2)}`;
  }
  document.getElementById("results").textContent = resultMessage;
}
