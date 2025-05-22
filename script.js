function solveQuadratic() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid numbers for a, b, and c.");
    return;
  }

  let discriminant = b * b - 4 * a * c;

  document.getElementById("discriminant").innerHTML =
    `D = ${b}<sup>2</sup> - 4(${a})(${c}) = ${discriminant}`;

  let rootMessage = "";
  if (discriminant > 0) {
    rootMessage = "This equation has 2 real roots.";
  } else if (discriminant === 0) {
    rootMessage = "This equation has 1 real root.";
  } else {
    rootMessage = "This equation has no real roots.";
  }
  document.getElementById("findRealRoots").innerHTML = rootMessage;

  let root1, root2;
  if (discriminant >= 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.getElementById("quadFormula1").innerHTML =
      ` = ${root1.toFixed(2)}`;
    document.getElementById("quadFormula2").innerHTML =
      ` = ${root2.toFixed(2)}`;
  } else {
    document.getElementById("quadFormula1").innerHTML = " = No real solution";
    document.getElementById("quadFormula2").innerHTML = " = No real solution";
  }

  // Vertex and axis of symmetry
  let vertexX = -b / (2 * a);
  let vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Get closest 3 integer x-values on each side
  let points = [];

  // Vertex (rounded to 2 decimal places)
  points.push(`(${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})`);

  // Points to the right
  for (let i = 1; i <= 3; i++) {
    let x = Math.round(vertexX) + i;
    let y = a * x * x + b * x + c;
    points.push(`(${x}, ${y.toFixed(2)})`);
  }

  // Points to the left
  for (let i = 1; i <= 3; i++) {
    let x = Math.round(vertexX) - i;
    let y = a * x * x + b * x + c;
    points.push(`(${x}, ${y.toFixed(2)})`);
  }

  let resultMessage = `Discriminant: ${discriminant}\n`;
  resultMessage += rootMessage + "\n";
  if (discriminant >= 0) {
    resultMessage += `Root 1: ${root1.toFixed(2)}\n`;
    resultMessage += `Root 2: ${root2.toFixed(2)}\n`;
  }

  resultMessage += `Vertex & Nearby Points:\n`;
  resultMessage += `Vertex: ${points.join(", ")}`;

  // Axis of symmetry (still cool info)
  resultMessage += `\nAxis of Symmetry: x = ${vertexX.toFixed(2)}`;

  document.getElementById("results").textContent = resultMessage;
}
